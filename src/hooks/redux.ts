import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../store";

export const useTypedSelecor: TypedUseSelectorHook<RootState> = useSelector;