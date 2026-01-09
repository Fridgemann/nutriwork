'use client';
import { useState } from 'react';

export default function Oneriler() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const recipes = [
        {
            id: 1,
            title: "Yulaf Lapası ile Sağlıklı Kahvaltı",
            image: "🥣",
            description: "Tam tahıllı yulaf, taze meyveler ve bademle hazırlanan besleyici kahvaltı",
            calories: 320,
            prepTime: "10 dk",
            tags: ["Diyabet Dostu", "Gluten İçermez", "Kalp Sağlığı"],
            ingredients: ["Yulaf", "Badem sütü", "Muz", "Yaban mersini", "Badem"],
            suitable: ["Diyabet", "Çölyak", "Laktoz İntoleransı"]
        },
        {
            id: 2,
            title: "Izgara Tavuk ve Quinoa Bowl",
            image: "🍗",
            description: "Protein açısından zengin, düşük sodyumlu öğle yemeği",
            calories: 450,
            prepTime: "25 dk",
            tags: ["Yüksek Protein", "Düşük Sodyum", "Kalp Dostu"],
            ingredients: ["Tavuk göğsü", "Quinoa", "Brokoli", "Havuç", "Zeytinyağı"],
            suitable: ["Hipertansiyon", "Kalp Hastalığı", "Diyabet"]
        },
        {
            id: 3,
            title: "Sebzeli Mercimek Çorbası",
            image: "🍲",
            description: "Lifli, mideye yumuşak, tam besin değeri yüksek çorba",
            calories: 280,
            prepTime: "30 dk",
            tags: ["Yüksek Lif", "Vegan", "Mideye Yumuşak"],
            ingredients: ["Kırmızı mercimek", "Havuç", "Patates", "Soğan", "Kimyon"],
            suitable: ["Mide Hassasiyeti", "Hipertansiyon", "Diyabet"]
        },
        {
            id: 4,
            title: "Fırında Somon ve Buharda Sebze",
            image: "🐟",
            description: "Omega-3 açısından zengin, kalp sağlığı için ideal akşam yemeği",
            calories: 420,
            prepTime: "35 dk",
            tags: ["Omega-3", "Düşük Kolesterol", "Kalp Sağlığı"],
            ingredients: ["Somon fileto", "Brokoli", "Kuşkonmaz", "Limon", "Taze otlar"],
            suitable: ["Kalp Hastalığı", "Hipertansiyon", "Diyabet"]
        },
        {
            id: 5,
            title: "Kinoa ve Nohut Salatası",
            image: "🥗",
            description: "Gluten içermeyen, protein dolu, hafif ve doyurucu salata",
            calories: 380,
            prepTime: "20 dk",
            tags: ["Gluten Free", "Yüksek Protein", "Vegan"],
            ingredients: ["Kinoa", "Nohut", "Cherry domates", "Salatalık", "Maydanoz"],
            suitable: ["Çölyak", "Diyabet", "Laktoz İntoleransı"]
        },
        {
            id: 6,
            title: "Hindi Köfte ve Sebze Püresi",
            image: "🍖",
            description: "Yağsız et, yumuşak doku, kolay sindirilen akşam yemeği",
            calories: 350,
            prepTime: "30 dk",
            tags: ["Düşük Yağ", "Yüksek Protein", "Yumuşak"],
            ingredients: ["Hindi kıyma", "Patates", "Havuç", "Zencefil", "Maydanoz"],
            suitable: ["Mide Hassasiyeti", "Kalp Hastalığı", "Diyabet"]
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % recipes.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + recipes.length) % recipes.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">
                        Size Özel Tarif <span className="text-green-600">Önerileri</span>
                    </h1>
                    <p className="text-xl text-gray-600">
                        Sağlık durumunuza uygun, lezzetli ve besleyici tarifler
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="relative">
                    {/* Main Card */}
                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                        <div className="grid md:grid-cols-2">
                            {/* Left Side - Image & Basic Info */}
                            <div className="bg-gradient-to-br from-green-100 to-green-200 p-12 flex flex-col items-center justify-center">
                                <div className="text-9xl mb-6">{recipes[currentSlide].image}</div>
                                <div className="text-center">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                        {recipes[currentSlide].title}
                                    </h2>
                                    <p className="text-lg text-gray-700 mb-6">
                                        {recipes[currentSlide].description}
                                    </p>
                                    <div className="flex gap-6 justify-center">
                                        <div className="text-center">
                                            <div className="text-3xl font-bold text-green-600">
                                                {recipes[currentSlide].calories}
                                            </div>
                                            <div className="text-sm text-gray-600">Kalori</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-3xl font-bold text-green-600">
                                                {recipes[currentSlide].prepTime}
                                            </div>
                                            <div className="text-sm text-gray-600">Hazırlık</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side - Details */}
                            <div className="p-8 md:p-12">
                                {/* Tags */}
                                <div className="mb-6">
                                    <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">
                                        Özellikler
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {recipes[currentSlide].tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Ingredients */}
                                <div className="mb-6">
                                    <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">
                                        Malzemeler
                                    </h3>
                                    <div className="space-y-2">
                                        {recipes[currentSlide].ingredients.map((ingredient, index) => (
                                            <div key={index} className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                                                <span className="text-gray-700 text-lg">{ingredient}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Suitable For */}
                                <div className="mb-8">
                                    <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">
                                        Uygun Olduğu Durumlar
                                    </h3>
                                    <div className="space-y-2">
                                        {recipes[currentSlide].suitable.map((condition, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-lg"
                                            >
                                                <span className="text-blue-600 text-xl">✓</span>
                                                <span className="text-gray-800 font-medium">{condition}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Action Button */}
                                <button className="w-full bg-green-600 text-white py-4 rounded-lg hover:bg-green-700 font-semibold text-lg transition-colors shadow-md">
                                    Tarifi Görüntüle
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-gray-50 text-gray-800 rounded-full p-4 shadow-xl transition-all hover:scale-110 z-10"
                        aria-label="Önceki tarif"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-gray-50 text-gray-800 rounded-full p-4 shadow-xl transition-all hover:scale-110 z-10"
                        aria-label="Sonraki tarif"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Dots Navigation */}
                <div className="flex justify-center gap-3 mt-8">
                    {recipes.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`transition-all ${
                                currentSlide === index
                                    ? 'w-12 bg-green-600'
                                    : 'w-3 bg-gray-300 hover:bg-gray-400'
                            } h-3 rounded-full`}
                            aria-label={`${index + 1}. tarife git`}
                        />
                    ))}
                </div>

                {/* Recipe Counter */}
                <div className="text-center mt-6">
                    <p className="text-gray-600 text-lg">
                        <span className="font-bold text-green-600">{currentSlide + 1}</span> / {recipes.length} Tarif
                    </p>
                </div>
            </div>
        </div>
    );
}