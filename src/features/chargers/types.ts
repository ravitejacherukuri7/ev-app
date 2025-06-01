export type ChargerStatus = 'offline' | 'online' | 'charging' | 'fault' | 'ready';

export interface Charger {
  id: string;
  name: string; 
  status: ChargerStatus;
  
}