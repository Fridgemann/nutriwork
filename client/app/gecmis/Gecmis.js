"use client"
import React, { useEffect, useState } from "react";

export default function Gecmis() {
    const API = process.env.NEXT_PUBLIC_API_URL + '/recipes';
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch(API) // Adjust port if needed
            .then((res) => res.json())
            .then((data) => setRecipes(data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">Kaydettikleriniz</h1>
            {recipes.length === 0 ? (
                <span className="text-xl text-gray-600">Henüz kayıtlı bir tarif yok.</span>
            ) : (
                <ul className="w-full max-w-md space-y-4">
                    {recipes.map((recipe, idx) => (
                        <li key={idx} className="p-4 bg-white rounded shadow">
                            <div className="font-semibold text-lg">{recipe.name}</div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}