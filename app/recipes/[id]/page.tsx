/*
import recipesData from '../../../recipes.json';

export default function RecipePage({ params }: { params: { id: string } }) {
    return (
        <div>
            <div>
                <h1>Name: {params.id}</h1>
            </div>
        </div>
    );
    
}
*/




import recipesData from '../../../recipes.json';

export default function RecipePage({ params }: { params: { id: string } }) {
    // Encontrar a receita com base no ID fornecido
    const recipe = recipesData.find((recipe) => recipe.id === params.id);

    // Verificar se a receita foi encontrada
    if (!recipe) {
        return (
            <div className="container mx-auto px-4 py-8">
                <p>Receita não encontrada.</p>
            </div>
        );
    }

    // Renderizar os detalhes da receita
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-4">{recipe.name}</h1>
            <div className="text-center">
                <img src={recipe.image} alt={recipe.name} className="w-96 h-auto mx-auto mb-4" />
            </div>
            <div>
                <h2 className="text-xl font-semibold mb-2">Ingredientes:</h2>
                <ul className="list-disc pl-4 mb-4">
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
                <h2 className="text-xl font-semibold mb-2">Instruções:</h2>
                <ul className="list-decimal pl-4 mb-4">
                    {recipe.instructions.map((instruction, index) => (
                        <li key={index}>{instruction}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
