module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'modalities',
      [
        {
          name: '1 - Testemunho informal em áreas internas',
          nickname: 'Informal em áreas internas',
          number: 1,
          information: '',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: '2 - Testemunho por interfone interno',
          nickname: 'Interfone Interno',
          number: 2,
          information: '',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: '3 - Testemunho por interfone externo',
          nickname: 'Interfone Externo',
          number: 3,
          information: '',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: '4 - Testemunho por telefone',
          nickname: 'Telefone',
          number: 4,
          information: '',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: '5 - Testemunho por carta',
          nickname: 'Carta',
          number: 5,
          information: '',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: '6 - Testemunho público em áreas internas',
          nickname: 'Público em áreas internas',
          number: 6,
          information: '',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('modalities', null, {});
  },
};
