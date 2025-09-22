import { Joueur } from './../../src/core/joueur';
import supertest from 'supertest';
import 'jest-extended';
import app from '../../src/app';

const request = supertest(app);

describe('GET /api/v1/jeu/redemarrerJeu', () => {

  beforeAll(async () => {
    let player1: Joueur;
    let player2: Joueur;

    player1 = new Joueur("test1");
    player2 = new Joueur("test2");
  });

  it("devrait retourner un succès (200) et du JSON", async () => {
    const response = await request.get('/api/v1/jeu/redemarrerJeu');

    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json");

    expect(response.body).toEqual(
    expect.objectContaining({
      message: "Success",
    }));
  });
  
});



/* describe('redemarrerJeu.test.ts', () => {
  it("devrait implémenter test", async () => {
    throw new Error("Ce test n'a pas été défini")
  });
}); */
