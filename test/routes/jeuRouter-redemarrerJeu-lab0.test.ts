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

  it("devrait retourner 404 (joueur inexistant après redemarrerJeu)", async () => {
  await request.get('/api/v1/jeu/redemarrerJeu');

  const response = await request.get('/api/v1/jeu/jouer/test');

  expect(response.status).toBe(404);
  expect(response.type).toBe("application/json");
});
  
});
