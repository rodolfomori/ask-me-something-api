module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'settings',
      [
        {
          id: 1001,
          weekend: 6,
          midweek: 2,
          weekend_time: '20:00',
          midweek_time: '19:00',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('settings', null, {});
  },
};
