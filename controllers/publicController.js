const generateDummyData = require('../models/dummyData');

const publicController = {
    transactions: (req, res) => {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const machineId = req.query.machineId || null;

        const transactionsData = generateDummyData.transactions(page, limit, machineId);

        res.render('transactions/public-index', {
            title: 'Transaction Records',
            transactions: transactionsData.data,
            pagination: transactionsData.pagination,
            machineId: machineId,
            currentYear: new Date().getFullYear()
        });
    },

    health: (req, res) => {
        res.json({
            status: 'active',
            service: 'vending-machine-transactions',
            timestamp: new Date().toISOString(),
            endpoints: {
                transactions: '/transactions'
            }
        });
    }
};

module.exports = publicController;