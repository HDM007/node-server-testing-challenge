const Snack = require("./snacks-model");
const db = require("../../data/db-config");

beforeAll(async () => {
    await db.migrate.rollback();
    await db.migrate.latest();
  });
  
  beforeEach(async () => {
    await db("snacks").truncate();
    await db.seed.run();
  });
  
  afterAll(async () => {
    await db.destroy();
  });

  describe("Snack Model", () => {
      it("works", () => {
          expect(true).toBe(true);
      })

      describe("insert", () => {
        it("can insert a snack into the db", async () => {
          const nextSnack = { name: "Milky Way", tasty: false };
          await Snack.create(nextSnack);
          expect(await db("snacks")).toHaveLength(3);
          const insertedNextSnack = await db("snacks").where({ snack_id: 3 }).first();
          expect( insertedNextSnack ).toMatchObject( nextSnack );
        });
        it("returns new snack", async () => {
          const chocolate = { name: "Chocolate", tasty: true };
          const result = await Snack.create(chocolate);
          expect(result).toMatchObject({ name: "Chocolate", tasty: true });
        });

      });

      describe("delete", () => {
          it("can delete snack from table", async () => {
              await Snack.remove(3);
              expect(await db("snacks").toHaveLength(3))
          })
      })


  })