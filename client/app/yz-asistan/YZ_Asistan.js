'use client';
import { useState, useEffect } from 'react';

export default function YZ_Asistan() {
    const API = process.env.NEXT_PUBLIC_API_URL + '/recipes';
    const [recipes, setRecipes] = useState([]);
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        fetch(API)
            .then(res => res.json())
            .then(data => setRecipes(data))
            .catch(err => console.error('Tarifler alınamadı:', err));
    }, [API]);

    if (recipes.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-white">
                <span className="text-xl text-gray-600">Tarifler yükleniyor...</span>
            </div>
        );
    }

    const recipe = recipes[current];
    // If you have only one recipe, or want to map image by name:
    const imageMap = {
        "Zeytinyağlı Sebzeli Tavuk Sote": "/zeytinyag_sebzeli_tavuk_sote.jpeg",
        "Zeytinyağlı Kabak Yemeği": "/yemek-2.jpeg",
        "Izgara Hindi Göğsü": "/yemek-3.jpeg",
        "Kinoa ve Sebzeli Salata": "/yemek-4.jpeg",
        "Sebzeli Pirinç Lapası": "/yemek-5.jpeg",
        "Fırında Tavuk ve Patates": "/yemek-6.jpeg",
        "Chia Puding (Laktozsuz)": "/yemek-7.jpeg",
    };
    const imageUrl = recipe.image || imageMap[recipe.name] || "/default-food.jpg";

    const handleLike = () => setCurrent((prev) => (prev + 1) % recipes.length);
    const handleDislike = () => setCurrent((prev) => (prev + 1) % recipes.length);

    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12">
            <div className="max-w-3xl mx-auto px-4">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">YZ <span className="text-green-600">Beslenme Asistanı</span></h1>
                    <p className="text-lg text-gray-600">Asistanınıza size neyin uygun olduğunu seçin!</p>
                </div>
                <div className="flex items-center justify-center gap-6">
                    {/* Dislike Button */}
                    <button
                        onClick={handleDislike}
                        className="w-16 h-16 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
                        aria-label="Beğenmedim"
                    >
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    {/* Recipe Card */}
                    <div className="flex-1 bg-white rounded-3xl shadow-2xl overflow-hidden max-w-xl">
                        <div className="p-6">
                            <div className="w-full h-64 rounded-2xl overflow-hidden mb-4 flex items-center justify-center bg-gray-100">
                                <img
                                    src={imageUrl}
                                    alt={recipe.name}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">{recipe.name}</h2>
                            <div className="mb-2">
                                <span className="font-semibold text-gray-700">Malzemeler:</span>
                                <ul className="list-disc list-inside text-gray-700">
                                    {recipe.ingredients.map((ing, i) => (
                                        <li key={i}>{ing}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mb-2">
                                <span className="font-semibold text-gray-700">Alerjenler:</span>
                                <ul className="list-disc list-inside text-yellow-700">
                                    {recipe.allergens.map((al, i) => (
                                        <li key={i}>{al}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mb-2">
                                <span className="font-semibold text-gray-700">Uygun Olduğu Durumlar:</span>
                                <ul className="list-disc list-inside text-green-700">
                                    {recipe.suitableFor.map((s, i) => (
                                        <li key={i}>{s}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mb-2">
                                <span className="font-semibold text-gray-700">Uygun Olmadığı Durumlar:</span>
                                <ul className="list-disc list-inside text-red-700">
                                    {recipe.notSuitableFor.map((s, i) => (
                                        <li key={i}>{s}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mb-2">
                                <span className="font-semibold text-gray-700">Porsiyon Notu:</span>
                                <div className="text-gray-700">{recipe.portionNote}</div>
                            </div>
                            {recipe.diseaseReasons && Object.entries(recipe.diseaseReasons).map(([disease, reasons]) => (
                                <div key={disease} className="mb-2">
                                    <span className="font-semibold text-gray-700">{disease} için neden uygun?</span>
                                    <ul className="list-disc list-inside text-blue-700">
                                        {reasons.map((r, i) => (
                                            <li key={i}>{r}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Like Button */}
                    <button
                        onClick={handleLike}
                        className="w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
                        aria-label="Beğendim"
                    >
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                    </button>
                </div>
                <div className="text-center mt-6 text-gray-600">
                    Tarif <span className="font-bold text-green-600">{current + 1}</span> / {recipes.length}
                </div>
            </div>
        </div>
    );
}