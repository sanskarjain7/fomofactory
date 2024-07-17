import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { openModal, closeModal, selectCoin, Coin } from '../../redux/modalSlice';


const Modal = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector((state: RootState) => state.modal.isOpen);
    const selectedCoin = useSelector((state: RootState) => state.modal.selectedCoin);

    const coins = ["BTC", "ETH", "BNB", "SOL", "XRP"];

    const handleCoinChange = (coin: Coin) => {
        dispatch(selectCoin(coin));
        dispatch(closeModal());
    };

    const handleOpenModal = () => {
        dispatch(openModal());
    };

    const handleCloseModal = () => {
        dispatch(closeModal());
    };

    return (
        <div>
            <button onClick={handleOpenModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Change Stock/Crypto
            </button>

            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center">
                    <div className="modal bg-white rounded-lg p-6">
                        <h2 className="text-xl font-bold mb-4">Change Stock/Crypto</h2>
                        <div>
                            {coins.map((coin) => (
                                <button
                                    key={coin}
                                    onClick={() => handleCoinChange(coin)}
                                    className={`py-2 px-4 rounded ${selectedCoin === coin ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`}
                                >
                                    {coin}
                                </button>
                            ))}
                        </div>
                        <button onClick={handleCloseModal} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Modal;

// import React, { useState } from 'react';

// const Modal = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const openModal = () => {
//         setIsOpen(true);
//     };

//     const closeModal = () => {
//         setIsOpen(false);
//     };

//     const coins = ["BTC", "ETH", "BNB", "SOL", "XRP"];
//     const [selectedCoin, setSelectedCoin] = useState("");

//     const handleCoinChange = (coin: string) => {
//         setSelectedCoin(coin);
//         closeModal();
//     };

//     return (
//         <div>
//             <button onClick={openModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                 Change Stock/Crypto
//             </button>

//             {isOpen && (
//                 <div className="fixed inset-0 flex items-center justify-center">
//                     <div className="modal bg-white rounded-lg p-6">
//                         <h2 className="text-xl font-bold mb-4">Change Stock/Crypto</h2>
//                         <div>
//                             {coins.map((coin) => (
//                                 <button
//                                     key={coin}
//                                     onClick={() => handleCoinChange(coin)}
//                                     className={`py-2 px-4 rounded ${selectedCoin === coin ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`}
//                                 >
//                                     {coin}
//                                 </button>
//                             ))}
//                         </div>
//                         <button onClick={closeModal} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                             Close
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Modal;