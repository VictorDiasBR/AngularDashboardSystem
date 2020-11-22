export default interface Database {
  User: { [user_id: string]: User };
  Locations: { [location_name: string]: Locations };
}

interface User {
  name: string;
  email: string;
  nick: string;
}

interface Locations {
  latitude: number;
  longitude: number;
  single: string;
}
