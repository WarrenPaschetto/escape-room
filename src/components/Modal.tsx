import { useGameState } from '../state/gameState';

export default function Modal() {
    const { modal, closeModal } = useGameState();

    if (!modal) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded shadlow-lg max-w-sm">
                <p>{modal}</p>
                <button
                    onClick={closeModal}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
                >
                    Close
                </button>
            </div>
        </div>
    );
}