const getCompanyInfo = (req, res) => {
    res.json({ message: 'Get company info' });
};

const updateCompanyInfo = (req, res) => {
    res.json({ message: 'Company info updated' });
};

module.exports = { getCompanyInfo, updateCompanyInfo };
