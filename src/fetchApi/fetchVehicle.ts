const APP_ID = 'bffbd5bee5dde7f6edaea603105cb995';

export const fetchVehicle = async () => {
  const res = await fetch(
    `https://api.worldoftanks.eu/wot/encyclopedia/vehicles/?application_id=${APP_ID}`,
  );

  if (!res.ok) {
    throw new Error("Can't loading data");
  }

  const result = await res.json();

  return result.data;
};
