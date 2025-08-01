import { useGameState } from '../state/gameState';

export default function Inventory() {
    const { inventory } = useGameState();
    return (
        <div className="fixed bottom-0 w-full bg-gray-900 text-white p-4 flex gap-4">
            {inventory.length === 0 ? (
                <span>No items yet</span>
            ) : (
                inventory.map((item) => (
                    <div key={item} className="border p-2 rounded bg-gray-700">
                        {item}
                    </div>
                ))
            )}

        </div>
    );
}