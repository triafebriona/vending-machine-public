const generateDummyData = {
    transactions: (page = 1, limit = 10, machineId = null) => {
        // Data sesuai dengan struktur dari microservice
        const allTransactions = [
            // VM001 - PPNS Transactions
            {
                id: 'tx_ppns_001',
                machineId: 'VM001',
                machineHash: '0x7a4b3c2d1e5f6a7b8c9d0e1f2a3b4c5d',
                transactionType: 'PURCHASE',
                slotId: 'A1',
                productName: 'Pocky Chocolate',
                price: 8000,
                stockAfter: 2,
                sourceService: 'operation',
                timestamp: '2025-02-26T08:15:00Z',
                blockchainStatus: 'CONFIRMED',
                dataHash: '0x9f1c2d3e4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d',
                txHash: '0x8a7b6c5d4e3f2a1b0c9d8e7f6a5b4c3d2e1f0a9b',
                explorer: {
                    displayText: '🔗 View on PolygonScan',
                    url: 'https://amoy.polygonscan.com/tx/0x8a7b6c5d4e3f2a1b0c9d8e7f6a5b4c3d2e1f0a9b',
                    shortHash: '0x8a7b6c5d...',
                    network: 'Polygon Amoy Testnet'
                }
            },
            {
                id: 'tx_ppns_002',
                machineId: 'VM001',
                machineHash: '0x7a4b3c2d1e5f6a7b8c9d0e1f2a3b4c5d',
                transactionType: 'PURCHASE',
                slotId: 'B2',
                productName: 'Pocky Double Choco',
                price: 9000,
                stockAfter: 1,
                sourceService: 'operation',
                timestamp: '2025-02-26T09:30:00Z',
                blockchainStatus: 'CONFIRMED',
                dataHash: '0x2aa91b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a',
                txHash: '0x9b8c7d6e5f4a3b2c1d0e9f8a7b6c5d4e3f2a1b0c',
                explorer: {
                    displayText: '🔗 View on PolygonScan',
                    url: 'https://amoy.polygonscan.com/tx/0x9b8c7d6e5f4a3b2c1d0e9f8a7b6c5d4e3f2a1b0c',
                    shortHash: '0x9b8c7d6...',
                    network: 'Polygon Amoy Testnet'
                }
            },
            {
                id: 'tx_ppns_003',
                machineId: 'VM001',
                machineHash: '0x7a4b3c2d1e5f6a7b8c9d0e1f2a3b4c5d',
                transactionType: 'RESTOCK',
                slotId: 'A1',
                productName: 'Pocky Chocolate',
                price: 8000,
                stockAfter: 5,
                sourceService: 'operation',
                timestamp: '2025-02-26T10:45:00Z',
                blockchainStatus: 'CONFIRMED',
                dataHash: '0x3bb02c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b',
                txHash: '0xac9d8e7f6a5b4c3d2e1f0a9b8c7d6e5f4a3b2c1d',
                explorer: {
                    displayText: '🔗 View on PolygonScan',
                    url: 'https://amoy.polygonscan.com/tx/0xac9d8e7f6a5b4c3d2e1f0a9b8c7d6e5f4a3b2c1d',
                    shortHash: '0xac9d8e7...',
                    network: 'Polygon Amoy Testnet'
                }
            },

            // VM002 - PENS Transactions
            {
                id: 'tx_pens_001',
                machineId: 'VM002',
                machineHash: '0x1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e',
                transactionType: 'PURCHASE',
                slotId: 'A2',
                productName: 'Pocky Strawberry',
                price: 8000,
                stockAfter: 0,
                sourceService: 'operation',
                timestamp: '2025-02-26T11:20:00Z',
                blockchainStatus: 'PENDING',
                dataHash: '0x4cc13d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c',
                txHash: null,
                explorer: {
                    displayText: '⏳ Processing...',
                    url: null,
                    shortHash: 'Processing',
                    network: 'Polygon Amoy Testnet'
                }
            },
            {
                id: 'tx_pens_002',
                machineId: 'VM002',
                machineHash: '0x1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e',
                transactionType: 'PURCHASE',
                slotId: 'C1',
                productName: 'Pocky Cookies',
                price: 8500,
                stockAfter: 2,
                sourceService: 'operation',
                timestamp: '2025-02-26T12:15:00Z',
                blockchainStatus: 'CONFIRMED',
                dataHash: '0x5dd24e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d',
                txHash: '0xbd0e9f8a7b6c5d4e3f2a1b0c9d8e7f6a5b4c3d2e',
                explorer: {
                    displayText: '🔗 View on PolygonScan',
                    url: 'https://amoy.polygonscan.com/tx/0xbd0e9f8a7b6c5d4e3f2a1b0c9d8e7f6a5b4c3d2e',
                    shortHash: '0xbd0e9f8...',
                    network: 'Polygon Amoy Testnet'
                }
            },
            {
                id: 'tx_pens_003',
                machineId: 'VM002',
                machineHash: '0x1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e',
                transactionType: 'PURCHASE',
                slotId: 'B3',
                productName: 'Pocky Almond',
                price: 8500,
                stockAfter: 1,
                sourceService: 'operation',
                timestamp: '2025-02-26T13:40:00Z',
                blockchainStatus: 'FAILED',
                dataHash: '0x6ee35f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e',
                txHash: null,
                explorer: {
                    displayText: '❌ Transaction Failed',
                    url: null,
                    shortHash: 'Failed',
                    network: 'Polygon Amoy Testnet'
                }
            },

            // VM003 - ITS Transactions
            {
                id: 'tx_its_001',
                machineId: 'VM003',
                machineHash: '0x3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f',
                transactionType: 'PURCHASE',
                slotId: 'A3',
                productName: 'Pocky Matcha',
                price: 8000,
                stockAfter: 2,
                sourceService: 'operation',
                timestamp: '2025-02-26T14:30:00Z',
                blockchainStatus: 'CONFIRMED',
                dataHash: '0x7ff46a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f',
                txHash: '0xce1f0a9b8c7d6e5f4a3b2c1d0e9f8a7b6c5d4e3f',
                explorer: {
                    displayText: '🔗 View on PolygonScan',
                    url: 'https://amoy.polygonscan.com/tx/0xce1f0a9b8c7d6e5f4a3b2c1d0e9f8a7b6c5d4e3f',
                    shortHash: '0xce1f0a9...',
                    network: 'Polygon Amoy Testnet'
                }
            },
            {
                id: 'tx_its_002',
                machineId: 'VM003',
                machineHash: '0x3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f',
                transactionType: 'RESTOCK',
                slotId: 'B1',
                productName: 'Pocky Banana',
                price: 9000,
                stockAfter: 4,
                sourceService: 'operation',
                timestamp: '2025-02-26T15:50:00Z',
                blockchainStatus: 'CONFIRMED',
                dataHash: '0x80057b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a',
                txHash: '0xdf2a1b0c9d8e7f6a5b4c3d2e1f0a9b8c7d6e5f4a',
                explorer: {
                    displayText: '🔗 View on PolygonScan',
                    url: 'https://amoy.polygonscan.com/tx/0xdf2a1b0c9d8e7f6a5b4c3d2e1f0a9b8c7d6e5f4a',
                    shortHash: '0xdf2a1b0...',
                    network: 'Polygon Amoy Testnet'
                }
            },
            {
                id: 'tx_its_003',
                machineId: 'VM003',
                machineHash: '0x3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f',
                transactionType: 'PURCHASE',
                slotId: 'C2',
                productName: 'Pocky Milk',
                price: 7500,
                stockAfter: 0,
                sourceService: 'operation',
                timestamp: '2025-02-26T16:20:00Z',
                blockchainStatus: 'CONFIRMED',
                dataHash: '0x91168c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b',
                txHash: '0xe03b2c1d0e9f8a7b6c5d4e3f2a1b0c9d8e7f6a5b',
                explorer: {
                    displayText: '🔗 View on PolygonScan',
                    url: 'https://amoy.polygonscan.com/tx/0xe03b2c1d0e9f8a7b6c5d4e3f2a1b0c9d8e7f6a5b',
                    shortHash: '0xe03b2c1...',
                    network: 'Polygon Amoy Testnet'
                }
            }
        ];

        // Filter by machineId if provided
        let filtered = allTransactions;
        if (machineId) {
            filtered = filtered.filter(tx => tx.machineId === machineId);
        }

        // Pagination
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        const paginatedData = filtered.slice(startIndex, endIndex);

        return {
            success: true,
            data: paginatedData,
            pagination: {
                page,
                limit,
                total: filtered.length,
                pages: Math.ceil(filtered.length / limit)
            }
        };
    },

    // Optional: get single transaction
    getTransaction: (id) => {
        const allTransactions = generateDummyData.transactions(1, 100).data;
        return allTransactions.find(tx => tx.id === id) || null;
    }
};

module.exports = generateDummyData;