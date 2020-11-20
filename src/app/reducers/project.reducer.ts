import { Action } from "@ngrx/store";
import { Card } from "./../models/project.model";
import * as CardActions from "./../actions/project.actions";

// Section 1
const initialState: Card = {
  matricula: "100914619",
  nome: "victor",
  av1: 6,
  av2: 6,
  av3: 6,
  media: "6",
  descricao: "XDXD",
  obsTitulo: "XD",
  progresso: 60
};

// Section 2
export function reducer(
  state: Card[] = [initialState],
  action: CardActions.Actions
) {
  // Section 3
  switch (action.type) {
    case CardActions.ADD_CARD:
      return [...state, action.payload];
    default:
      return state;
  }
}
