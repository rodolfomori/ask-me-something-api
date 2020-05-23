module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'buildings',
      [
        {
          territory: 1,
          block: 'A',
          type: 'Prédio',
          name: 'Condomínio Primavera',
          address: 'R. João da Silva',
          blocks_quantity: '2 blocos',
          floors_quantity: '2',
          apartments_quantity: '100 apartamentos',
          lobby: true,
          intercom: true,
          public_access: false,
          m1: true,
          m2: true,
          m3: false,
          m4: true,
          m5: false,
          m6: true,
          visit: true,
          observations: 'Irmã Maria da Silva mora nesse prédio',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          territory: 2,
          block: '2',
          type: 'Condominio de casas',
          name: 'Condomínio Flor do Campo',
          address: 'R. Salao do Reino n55',
          blocks_quantity: '2 blocos',
          floors_quantity: '2',
          apartments_quantity: '10 casas',
          lobby: true,
          intercom: true,
          public_access: false,
          m1: true,
          m2: true,
          m3: false,
          m4: true,
          m5: false,
          m6: true,
          visit: true,
          observations: 'Irmã Joaquina dmora nesse condominio',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('buildings', null, {});
  },
};
