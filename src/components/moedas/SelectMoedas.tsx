import { useState } from "react";
import { useMoedas } from "../../hooks/useMoedas";


export const SelectMoedas = () => {
  const { moedas } = useMoedas();
  const moedasOptions = moedas.map((moedas) => ({
    value: moedas.USDBRL.name
  }));

  return (
    moedasOptions
  );
};
