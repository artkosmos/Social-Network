import './index.css';
import {state} from "./redux/state";
import {rerenderEntireTree} from "./rerender";


rerenderEntireTree(state)
