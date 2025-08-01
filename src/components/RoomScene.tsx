import { useGameState } from '../state/gameState';

export default function RoomScene() {
    const { addToInventory, openModal } = useGameState();

    return (
        <div className="relative">
            <img src="/images/room.jpg" alt="Room" className="w-full h-auto" />

            {/* Seat cusion hotspot */}
            <button
                aria-label="Inspect the cusion"
                tabIndex={0}
                onClick={() => {
                    addToInventory('key');
                    openModal('You found a key under the seat cusion!');
                }}
                className="
                    absolute top-[62%] left-[27%] w-[7%] h-[2%]
                    appearance-none
                    border-2 border-transparent
                    hover:border-yellow-400 focus:border-yellow-400
                    bg-transparent
                    rounded-md
                    cursor-pointer
                    transition-all duration-150
                "
            />
        </div>
    );
}