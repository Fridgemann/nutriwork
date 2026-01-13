"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Gecmis() {
    const API = process.env.NEXT_PUBLIC_API_URL + '/recipes';
    const [recipes, setRecipes] = useState([]);
    const [expandedIndex, setExpandedIndex] = useState(null);

    useEffect(() => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => setRecipes(data))
            .catch((err) => console.error(err));
    }, []);

    const toggleExpand = (idx) => {
        setExpandedIndex(expandedIndex === idx ? null : idx);
    };

    const imageMap = {
        "Zeytinyağlı Sebzeli Tavuk Sote": "/zeytinyag_sebzeli_tavuk_sote.jpeg",
        "Zeytinyağlı Kabak Yemeği": "/yemek-2.jpeg",
        "Izgara Hindi Göğsü": "/yemek-3.jpeg",
        "Kinoa ve Sebzeli Salata": "/yemek-4.jpeg",
        "Sebzeli Pirinç Lapası": "/yemek-5.jpeg",
        "Fırında Tavuk ve Patates": "/yemek-6.jpeg",
        "Chia Puding (Laktozsuz)": "/yemek-7.jpeg",
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
            <div className="fixed top-10 left-10 z-50">
                <Link href="/yz-asistan" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg transition-colors">
                    ← Geri Dön
                </Link>
            </div>
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">
                    Kaydettiğiniz <span className="text-blue-600">Tarifler</span>
                </h1>
                {recipes.length === 0 ? (
                    <div className="text-center">
                        <span className="text-xl text-gray-600">Henüz kayıtlı bir tarif yok.</span>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {recipes.map((recipe, idx) => {
                            const isExpanded = expandedIndex === idx;
                            const imageUrl = recipe.image || imageMap[recipe.name] || "/default-food.jpg";

                            return (
                                <div
                                    key={idx}
                                    className="bg-white rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl"
                                >
                                    {/* Recipe Header - Clickable */}
                                    <div
                                        onClick={() => toggleExpand(idx)}
                                        className="p-10 cursor-pointer flex items-center justify-between hover:bg-gray-50 transition-colors"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
                                                <img
                                                    src={imageUrl}
                                                    alt={recipe.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div>
                                                <h2 className="font-bold text-xl text-gray-900">{recipe.name}</h2>
                                                <p className="text-sm text-gray-500">Detayları görmek için tıklayın</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Expanded Content */}
                                    {isExpanded && (
                                        <div className="px-6 pb-6 border-t border-gray-100">
                                            <div className="pt-4 space-y-4">
                                                {/* Large Image */}
                                                <div className="w-full h-64 rounded-xl overflow-hidden bg-gray-100">
                                                    <img
                                                        src={imageUrl}
                                                        alt={recipe.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>

                                                {/* Ingredients */}
                                                <div>
                                                    <h3 className="font-semibold text-gray-900 mb-2">Malzemeler:</h3>
                                                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                        {recipe.ingredients.map((ing, i) => (
                                                            <li key={i}>{ing}</li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                {/* Allergens */}
                                                {recipe.allergens && recipe.allergens.length > 0 && (
                                                    <div>
                                                        <h3 className="font-semibold text-gray-900 mb-2">Alerjenler:</h3>
                                                        <ul className="list-disc list-inside text-yellow-700 space-y-1">
                                                            {recipe.allergens.map((al, i) => (
                                                                <li key={i}>{al}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}

                                                {/* Suitable For */}
                                                {recipe.suitableFor && recipe.suitableFor.length > 0 && (
                                                    <div>
                                                        <h3 className="font-semibold text-gray-900 mb-2">Uygun Olduğu Durumlar:</h3>
                                                        <ul className="list-disc list-inside text-green-700 space-y-1">
                                                            {recipe.suitableFor.map((s, i) => (
                                                                <li key={i}>{s}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}

                                                {/* Not Suitable For */}
                                                {recipe.notSuitableFor && recipe.notSuitableFor.length > 0 && (
                                                    <div>
                                                        <h3 className="font-semibold text-gray-900 mb-2">Uygun Olmadığı Durumlar:</h3>
                                                        <ul className="list-disc list-inside text-red-700 space-y-1">
                                                            {recipe.notSuitableFor.map((s, i) => (
                                                                <li key={i}>{s}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}

                                                {/* Portion Note */}
                                                {recipe.portionNote && (
                                                    <div>
                                                        <h3 className="font-semibold text-gray-900 mb-2">Porsiyon Notu:</h3>
                                                        <p className="text-gray-700">{recipe.portionNote}</p>
                                                    </div>
                                                )}

                                                {/* Disease Reasons */}
                                                {recipe.diseaseReasons && Object.entries(recipe.diseaseReasons).map(([disease, reasons]) => (
                                                    <div key={disease}>
                                                        <h3 className="font-semibold text-gray-900 mb-2">{disease} için neden uygun?</h3>
                                                        <ul className="list-disc list-inside text-blue-700 space-y-1">
                                                            {reasons.map((r, i) => (
                                                                <li key={i}>{r}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}