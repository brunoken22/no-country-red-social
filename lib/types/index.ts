type TypeNavegationLink = {
  text: string;
  link: string;
};
type TypeFormGroup = {
  nombre: string;
  type: string;
  placeholder: string;
  id?: string;
};
type Publicacion = {
  id?: string;
  description?: string;
  img?: string;
  fecha?: string;
  like?: [];
  comentarios?: [];
  userId?: number;
  open?: boolean;
  fullName?: string;
  imgUser?: string;
};

type Message = {
  read: boolean;
  rtdb: string;
};
type Connect = {
  id: number;
  connect: boolean;
};
type User = {
  id: number;
  fullName: string;
  email: string;
  img: string;
  rtdb: string[];
};
type DataUser = {
  fullName?: string;
  email?: string;
  password?: string;
  img?: string;
};
type DataPublicacion = {
  id: number;
  description: string;
  like: number;
  img: string;
  comentarios: [];
  fecha: string;
};
type DataSingin = {
  email: string;
  password: string;
};
type Solicitud = {
  amigoId: number;
  estado: boolean;
  userId?: number;
};
