'use client';
import { useState } from 'react';

export default function YZ_Asistan() {
    const [currentRecipe, setCurrentRecipe] = useState(0);

    const recipes = [
        {
            id: 1,
            name: "Yulaf Lapası ile Sağlıklı Kahvaltı",
            image: "🥣",
            description: "Tam tahıllı yulaf, taze meyveler ve bademle hazırlanan besleyici kahvaltı",
            prepTime: "10 dakika",
            cookTime: "5 dakika",
            servings: "2 kişilik",
            calories: 320,
            safetyTags: [
                { label: "Diyabet Dostu", safe: true },
                { label: "Gluten İçermez", safe: true },
                { label: "Laktoz İçermez", safe: true },
                { label: "Düşük Sodyum", safe: true }
            ],
            allergens: ["Badem"],
            ingredients: [
                "1 su bardağı yulaf",
                "2 su bardağı badem sütü",
                "1 adet muz",
                "1 avuç yaban mersini",
                "1 çorba kaşığı badem",
                "1 tatlı kaşığı bal (isteğe bağlı)"
            ],
            instructions: [
                "Yulafı badem sütü ile orta ateşte 5 dakika pişirin",
                "Arada karıştırarak kremsi bir kıvam almasını sağlayın",
                "Muzunu dilimleyin ve üzerine ekleyin",
                "Yaban mersini ve bademleri serpin",
                "İsterseniz üzerine bal gezdirin ve sıcak servis yapın"
            ]
        },
        {
            id: 2,
            name: "Izgara Tavuk ve Quinoa Bowl",
            image: "🍗",
            description: "Protein açısından zengin, düşük sodyumlu öğle yemeği",
            prepTime: "15 dakika",
            cookTime: "25 dakika",
            servings: "2 kişilik",
            calories: 450,
            safetyTags: [
                { label: "Yüksek Protein", safe: true },
                { label: "Düşük Sodyum", safe: true },
                { label: "Kalp Dostu", safe: true },
                { label: "Gluten İçermez", safe: true }
            ],
            allergens: [],
            ingredients: [
                "2 adet tavuk göğsü",
                "1 su bardağı quinoa",
                "1 baş brokoli",
                "2 adet havuç",
                "2 çorba kaşığı zeytinyağı",
                "Taze otlar ve baharatlar"
            ],
            instructions: [
                "Quinoa'yı 2 su bardağı su ile 15 dakika pişirin",
                "Tavuk göğsünü baharatlarla marine edin",
                "Tavukları ızgarada her iki tarafını 6-7 dakika pişirin",
                "Brokoli ve havuçları buharda 10 dakika pişirin",
                "Tüm malzemeleri kasede birleştirin ve servis yapın"
            ]
        },
        {
            id: 3,
            name: "Sebzeli Mercimek Çorbası",
            image: "🍲",
            description: "Lifli, mideye yumuşak, tam besin değeri yüksek çorba",
            prepTime: "10 dakika",
            cookTime: "30 dakika",
            servings: "4 kişilik",
            calories: 280,
            safetyTags: [
                { label: "Yüksek Lif", safe: true },
                { label: "Vegan", safe: true },
                { label: "Mideye Yumuşak", safe: true },
                { label: "Düşük Yağ", safe: true }
            ],
            allergens: [],
            ingredients: [
                "1.5 su bardağı kırmızı mercimek",
                "2 adet havuç",
                "1 adet patates",
                "1 adet soğan",
                "1 tatlı kaşığı kimyon",
                "6 su bardağı sebze suyu"
            ],
            instructions: [
                "Soğanı doğrayın ve zeytinyağında kavurun",
                "Havuç ve patatesi küp şeklinde kesin",
                "Mercimek ve sebzeleri tencereye ekleyin",
                "Sebze suyunu ilave edin ve 30 dakika pişirin",
                "Blender'dan geçirip püre kıvamına getirin",
                "Kimyon ekleyip sıcak servis yapın"
            ]
        }
    ];

    const handleLike = () => {
        console.log('Tarif beğenildi:', recipes[currentRecipe].name);
        setCurrentRecipe((prev) => (prev + 1) % recipes.length);
    };

    const handleDislike = () => {
        console.log('Tarif beğenilmedi:', recipes[currentRecipe].name);
        setCurrentRecipe((prev) => (prev + 1) % recipes.length);
    };

    const recipe = recipes[currentRecipe];

    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">
                        YZ <span className="text-green-600">Beslenme Asistanı</span>
                    </h1>
                    <p className="text-xl text-gray-600">
                        Size uygun tarifleri keşfedin - beğenin ya da geçin
                    </p>
                </div>

                {/* Main Card Container */}
                <div className="relative max-w-5xl mx-auto">
                    <div className="flex items-center justify-center gap-8">
                        {/* Dislike Button (Left) */}
                        <button
                            onClick={handleDislike}
                            className="flex-shrink-0 w-20 h-20 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110 z-10"
                            aria-label="Beğenmedim"
                        >
                            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Recipe Card */}
                        <div className="flex-1 bg-white rounded-3xl shadow-2xl overflow-hidden max-w-3xl">
                            {/* Food Image Section */}
                            <div className="bg-gradient-to-br from-green-100 to-green-200 p-12 text-center">
                                <div className="text-9xl mb-4">{recipe.image}</div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">{recipe.name}</h2>
                                <p className="text-lg text-gray-700">{recipe.description}</p>
                            </div>

                            {/* Info Bar */}
                            <div className="bg-gray-50 px-8 py-4 grid grid-cols-3 gap-4 border-y border-gray-200">
                                <div className="text-center">
                                    <div className="text-sm text-gray-500 mb-1">Hazırlık</div>
                                    <div className="font-bold text-gray-900">{recipe.prepTime}</div>
                                </div>
                                <div className="text-center border-x border-gray-200">
                                    <div className="text-sm text-gray-500 mb-1">Pişirme</div>
                                    <div className="font-bold text-gray-900">{recipe.cookTime}</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-sm text-gray-500 mb-1">Kalori</div>
                                    <div className="font-bold text-green-600">{recipe.calories} kcal</div>
                                </div>
                            </div>

                            {/* Safety Tags */}
                            <div className="px-8 py-6 border-b border-gray-200">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">Güvenlik ve Uygunluk</h3>
                                <div className="grid grid-cols-2 gap-3">
                                    {recipe.safetyTags.map((tag, index) => (
                                        <div
                                            key={index}
                                            className={`flex items-center gap-2 px-4 py-3 rounded-lg ${
                                                tag.safe ? 'bg-green-50 border-2 border-green-500' : 'bg-red-50 border-2 border-red-500'
                                            }`}
                                        >
                                            <span className={`text-2xl ${tag.safe ? 'text-green-600' : 'text-red-600'}`}>
                                                {tag.safe ? '✓' : '✗'}
                                            </span>
                                            <span className="font-medium text-gray-900">{tag.label}</span>
                                        </div>
                                    ))}
                                </div>
                                {recipe.allergens.length > 0 && (
                                    <div className="mt-4 bg-yellow-50 border-2 border-yellow-400 rounded-lg px-4 py-3">
                                        <span className="font-bold text-gray-900">⚠️ Alerjenler: </span>
                                        <span className="text-gray-700">{recipe.allergens.join(', ')}</span>
                                    </div>
                                )}
                            </div>

                            {/* Recipe Content */}
                            <div className="px-8 py-6">
                                {/* Ingredients */}
                                <div className="mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Malzemeler ({recipe.servings})</h3>
                                    <ul className="space-y-2">
                                        {recipe.ingredients.map((ingredient, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <span className="text-green-600 mt-1">•</span>
                                                <span className="text-gray-700 text-lg">{ingredient}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Instructions */}
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Hazırlanışı</h3>
                                    <ol className="space-y-3">
                                        {recipe.instructions.map((instruction, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <span className="flex-shrink-0 w-7 h-7 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                                                    {index + 1}
                                                </span>
                                                <span className="text-gray-700 text-lg pt-0.5">{instruction}</span>
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                            </div>
                        </div>

                        {/* Like Button (Right) */}
                        <button
                            onClick={handleLike}
                            className="flex-shrink-0 w-20 h-20 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110 z-10"
                            aria-label="Beğendim"
                        >
                            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Recipe Counter */}
                <div className="text-center mt-8">
                    <p className="text-gray-600 text-lg">
                        Tarif <span className="font-bold text-green-600">{currentRecipe + 1}</span> / {recipes.length}
                    </p>
                    <p className="text-gray-500 mt-2">Beğendiğiniz tarifleri kaydediyoruz</p>
                </div>
            </div>
        </div>
    );
}