const enhancer = require('./enhancer.js');
// test away!

describe('enhancer', () => {

   const item = {
      name: "sword",
      durability: 50,
      enhancement: 0
   }

   it('Repairing restores durability to 100', () => {
      expect(enhancer.repair(item)).toHaveProperty('durability', 100);
   });

   it('Success increases enhancement by 1', () => {
      const increment = item.enhancement + 1;
      expect(enhancer.succeed(item)).toHaveProperty('enhancement', increment);
   });

   it('Success has no effect if enhancement = 20', () => {
      const maxedItem = {...item, enhancement: 20};
      expect(enhancer.succeed(maxedItem)).toHaveProperty('enhancement', 20);
   });

   it('Success has no effect on dura', () => {
      expect(enhancer.succeed(item)).toHaveProperty('durability', item.durability);
   });

   it('Fail reduces dura by 5 if enhancement lv is less than 15', () => {
      expect(enhancer.fail(item)).toHaveProperty('durability', 45);
   });

   it('Fail reduces dura by 10 if enhancement lv is 15 or more', () => {
      const lv15 = {...item, enhancement: 15}
      expect(enhancer.fail(lv15)).toHaveProperty('durability', 40);
   });

   it('Fail reduces dura by 10 and enhance by 1 if lv is more than 16', () => {
      const lv20= {...item, enhancement: 20}
      expect(enhancer.fail(lv20)).toHaveProperty('durability', 40);
      expect(enhancer.fail(lv20)).toHaveProperty('enhancement', 19);
   });

})