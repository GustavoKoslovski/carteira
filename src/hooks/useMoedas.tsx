import { useEffect, useState } from "react";

export interface USDBRL {
  code: string;
  codein: string;
  name: string;
  high: string;
  low: string;
  varBid: string;
  pctChange: string;
  bid: string;
  ask: string;
  timestamp: string;
  create_date: string;
}

export interface EURBRL {
  code: string;
  codein: string;
  name: string;
  high: string;
  low: string;
  varBid: string;
  pctChange: string;
  bid: string;
  ask: string;
  timestamp: string;
  create_date: string;
}

export interface BTCBRL {
  code: string;
  codein: string;
  name: string;
  high: string;
  low: string;
  varBid: string;
  pctChange: string;
  bid: string;
  ask: string;
  timestamp: string;
  create_date: string;
}

export interface RootObject {
  USDBRL: USDBRL;
  EURBRL: EURBRL;
  BTCBRL: BTCBRL;
}

export const useMoedas = () => {
  const [moedas, setMoedas] = useState<RootObject[]>([]);

  useEffect(() => {
    fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL")
      .then((response) => response.json())
      .then((data) => setMoedas(data));
  }, []);

  return {
    moedas,
  };
};
