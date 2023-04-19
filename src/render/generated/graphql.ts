import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  DateTimeTz: any;
  Upload: any;
};

export type Asiento = {
  __typename?: 'Asiento';
  asiento?: Maybe<Scalars['String']>;
  asientoId?: Maybe<Scalars['ID']>;
  code?: Maybe<Scalars['String']>;
  codigo?: Maybe<Scalars['String']>;
  eventoId?: Maybe<Scalars['Int']>;
  feriaId?: Maybe<Scalars['Int']>;
  reservado?: Maybe<Scalars['String']>;
  tendido?: Maybe<Scalars['String']>;
};

export type AsignacionEntrada = {
  __typename?: 'AsignacionEntrada';
  Evento?: Maybe<Evento>;
  apellidos?: Maybe<Scalars['String']>;
  asiento?: Maybe<Scalars['String']>;
  asientoId?: Maybe<Scalars['ID']>;
  codigo?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
  eventoId?: Maybe<Scalars['Int']>;
  fecha?: Maybe<Scalars['Date']>;
  hora?: Maybe<Scalars['String']>;
  nombres?: Maybe<Scalars['String']>;
  numeroDocumento?: Maybe<Scalars['String']>;
  reservado?: Maybe<Scalars['String']>;
  tendido?: Maybe<Scalars['String']>;
  tipoDocumento?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
};

export type AsignacionEntradaInput = {
  apellidos?: InputMaybe<Scalars['String']>;
  asientoId?: InputMaybe<Scalars['ID']>;
  nombres?: InputMaybe<Scalars['String']>;
  numeroDocumento?: InputMaybe<Scalars['String']>;
  tipoDocumento?: InputMaybe<Scalars['String']>;
};

export type AsignacionEntradaVentaInput = {
  apellidos?: InputMaybe<Scalars['String']>;
  asientoId?: InputMaybe<Scalars['ID']>;
  code?: InputMaybe<Scalars['String']>;
  nombres?: InputMaybe<Scalars['String']>;
  numeroDocumento?: InputMaybe<Scalars['String']>;
  tipoDocumento?: InputMaybe<Scalars['String']>;
};

export type Asistente = {
  __typename?: 'Asistente';
  apellidos?: Maybe<Scalars['String']>;
  asiento?: Maybe<Scalars['String']>;
  asientoId?: Maybe<Scalars['ID']>;
  codigo?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
  nombres?: Maybe<Scalars['String']>;
  numeroDocumento?: Maybe<Scalars['String']>;
  tipoDocumento?: Maybe<Scalars['String']>;
};

export type Bloque = {
  __typename?: 'Bloque';
  asiento?: Maybe<Scalars['String']>;
  bloqueId?: Maybe<Scalars['ID']>;
  codigo?: Maybe<Scalars['String']>;
  reservado?: Maybe<Scalars['String']>;
  tendido?: Maybe<Scalars['String']>;
};

export type BloqueoAsientoInput = {
  asiento?: InputMaybe<Scalars['String']>;
  codigo?: InputMaybe<Scalars['String']>;
  eventoId?: InputMaybe<Scalars['Int']>;
  feriaId?: InputMaybe<Scalars['Int']>;
  reservado?: InputMaybe<Scalars['String']>;
  tendido?: InputMaybe<Scalars['String']>;
};

export type Butaca = {
  __typename?: 'Butaca';
  butacaEventoId?: Maybe<Scalars['ID']>;
  cantidad?: Maybe<Scalars['Int']>;
  codigo?: Maybe<Scalars['String']>;
  feriaId?: Maybe<Scalars['Int']>;
  precio?: Maybe<Scalars['Float']>;
  tendido?: Maybe<Scalars['String']>;
};

export type ButacaEvento = {
  __typename?: 'ButacaEvento';
  butacaEventoId?: Maybe<Scalars['Int']>;
  cantidad?: Maybe<Scalars['Int']>;
  codigo?: Maybe<Scalars['String']>;
  eventoId?: Maybe<Scalars['Int']>;
  precio?: Maybe<Scalars['Float']>;
  tendido?: Maybe<Scalars['String']>;
};

export type ButacaEventoInput = {
  butacaEventoId?: InputMaybe<Scalars['Int']>;
  eventoId?: InputMaybe<Scalars['Int']>;
  precio?: InputMaybe<Scalars['Float']>;
};

export type ButacaInput = {
  butacaEventoId?: InputMaybe<Scalars['Int']>;
  feriaId?: InputMaybe<Scalars['Int']>;
  precio?: InputMaybe<Scalars['Float']>;
};

export type DetallePedido = {
  __typename?: 'DetallePedido';
  Evento?: Maybe<Evento>;
  asiento?: Maybe<Scalars['String']>;
  codigo?: Maybe<Scalars['String']>;
  detallePedidoId?: Maybe<Scalars['ID']>;
  eventoId?: Maybe<Scalars['Int']>;
  feriaId?: Maybe<Scalars['Int']>;
  pedidoId?: Maybe<Scalars['Int']>;
  precio?: Maybe<Scalars['Float']>;
  tendido?: Maybe<Scalars['String']>;
};

export type DetallePedidoInput = {
  asiento?: InputMaybe<Scalars['String']>;
  codigo?: InputMaybe<Scalars['String']>;
  eventoId?: InputMaybe<Scalars['Int']>;
  feriaId?: InputMaybe<Scalars['Int']>;
  precio?: InputMaybe<Scalars['Float']>;
  reservado?: InputMaybe<Scalars['String']>;
  tendido?: InputMaybe<Scalars['String']>;
};

export type DetalleVenta = {
  __typename?: 'DetalleVenta';
  Evento?: Maybe<Evento>;
  asiento?: Maybe<Scalars['String']>;
  codigo?: Maybe<Scalars['String']>;
  detalleVentaId?: Maybe<Scalars['ID']>;
  eventoId?: Maybe<Scalars['Int']>;
  feriaId?: Maybe<Scalars['Int']>;
  precio?: Maybe<Scalars['Float']>;
  tendido?: Maybe<Scalars['String']>;
  ventaId?: Maybe<Scalars['Int']>;
};

export type DetalleVentaInput = {
  asiento?: InputMaybe<Scalars['String']>;
  codigo?: InputMaybe<Scalars['String']>;
  eventoId?: InputMaybe<Scalars['Int']>;
  feriaId?: InputMaybe<Scalars['Int']>;
  precio?: InputMaybe<Scalars['Float']>;
  reservado?: InputMaybe<Scalars['String']>;
  tendido?: InputMaybe<Scalars['String']>;
};

export type Evento = {
  __typename?: 'Evento';
  Feria?: Maybe<Feria>;
  descripcionCorta?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
  eventoId?: Maybe<Scalars['ID']>;
  fecha?: Maybe<Scalars['Date']>;
  feriaId?: Maybe<Scalars['Int']>;
  hora?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  titulo?: Maybe<Scalars['String']>;
};

export type EventoInput = {
  descripcionCorta?: InputMaybe<Scalars['String']>;
  eventoId?: InputMaybe<Scalars['ID']>;
  fecha?: InputMaybe<Scalars['Date']>;
  feriaId?: InputMaybe<Scalars['Int']>;
  hora?: InputMaybe<Scalars['String']>;
  titulo?: InputMaybe<Scalars['String']>;
};

export type Feria = {
  __typename?: 'Feria';
  descripcionCorta?: Maybe<Scalars['String']>;
  descripcionLarga?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
  feriaId?: Maybe<Scalars['ID']>;
  imagenPrincipal?: Maybe<Imagen>;
  slug?: Maybe<Scalars['String']>;
  terminosCondiciones?: Maybe<Scalars['String']>;
  tipoColiseo?: Maybe<Scalars['String']>;
  titulo?: Maybe<Scalars['String']>;
};

export type FeriaInput = {
  descripcionCorta?: InputMaybe<Scalars['String']>;
  descripcionLarga?: InputMaybe<Scalars['String']>;
  feriaId?: InputMaybe<Scalars['ID']>;
  imagenPrincipal?: InputMaybe<Scalars['Int']>;
  slug?: InputMaybe<Scalars['String']>;
  terminosCondiciones?: InputMaybe<Scalars['String']>;
  tipoColiseo?: InputMaybe<Scalars['String']>;
  titulo?: InputMaybe<Scalars['String']>;
};

export type GetAllAsientos = {
  __typename?: 'GetAllAsientos';
  data?: Maybe<Array<Maybe<Asiento>>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllButacaEvento = {
  __typename?: 'GetAllButacaEvento';
  data?: Maybe<Array<Maybe<ButacaEvento>>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllButacas = {
  __typename?: 'GetAllButacas';
  data?: Maybe<Array<Maybe<Butaca>>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllCarrito = {
  __typename?: 'GetAllCarrito';
  data?: Maybe<Array<ShoppingCart>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllEventos = {
  __typename?: 'GetAllEventos';
  data?: Maybe<Array<Evento>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllFerias = {
  __typename?: 'GetAllFerias';
  data?: Maybe<Array<Feria>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllImagenes = {
  __typename?: 'GetAllImagenes';
  data?: Maybe<Array<Imagen>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllPedidos = {
  __typename?: 'GetAllPedidos';
  data?: Maybe<Array<Pedido>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllSuscriptores = {
  __typename?: 'GetAllSuscriptores';
  data?: Maybe<Array<Maybe<Suscriptor>>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllUsuarios = {
  __typename?: 'GetAllUsuarios';
  data?: Maybe<Array<Maybe<User>>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllVendedoras = {
  __typename?: 'GetAllVendedoras';
  data?: Maybe<Array<Maybe<Vendedora>>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllVentas = {
  __typename?: 'GetAllVentas';
  data?: Maybe<Array<Venta>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type Imagen = {
  __typename?: 'Imagen';
  created_at?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  titulo?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type LoginInput = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type LoginTotenInput = {
  password?: InputMaybe<Scalars['String']>;
  usuario?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  AsignarPrecioButacaAbono: Butaca;
  AsignarPrecioButacaEvento: ButacaEvento;
  BuscarPersona?: Maybe<Persona>;
  ConsultEmail?: Maybe<Scalars['String']>;
  CreateBloqueoAsiento?: Maybe<Scalars['String']>;
  CreateBloqueoAsientoAbono?: Maybe<Scalars['String']>;
  CreateEvento?: Maybe<Evento>;
  CreateFeria?: Maybe<Feria>;
  CreateImagen: Imagen;
  CreatePedido: Pedido;
  CreatePedidoAbonado: Pedido;
  CreateShoppingCart?: Maybe<Scalars['String']>;
  CreateShoppingCartAdmin?: Maybe<Scalars['String']>;
  CreateSuscriptor?: Maybe<Suscriptor>;
  CreateToten: Toten;
  CreateUsuario: User;
  CreateVendedora?: Maybe<Vendedora>;
  CreateVenta: Venta;
  CreateVentaAbonado: Venta;
  DeleteAsientoBloqueado?: Maybe<Scalars['String']>;
  DeleteAsientoCarrito?: Maybe<Scalars['String']>;
  DeleteEvento?: Maybe<Scalars['String']>;
  DeleteFeria?: Maybe<Scalars['String']>;
  DeleteImagen: Scalars['String'];
  DeleteToten?: Maybe<Scalars['String']>;
  DeleteVenta?: Maybe<Scalars['String']>;
  Login?: Maybe<User>;
  LoginToten?: Maybe<Toten>;
  RecoverPassword?: Maybe<Scalars['String']>;
  RestartAsientos?: Maybe<Scalars['String']>;
  TransferirEntrada?: Maybe<TransferirEntrada>;
  UpdateAsignacionEntrada?: Maybe<AsignacionEntrada>;
  UpdateAsignacionEntradaVenta?: Maybe<AsignacionEntrada>;
  UpdateAsistencia?: Maybe<Asistente>;
  UpdateCuentaUsuario: User;
  UpdateEstadoEvento?: Maybe<Evento>;
  UpdateEstadoFeria?: Maybe<Feria>;
  UpdateEstadoToten: Toten;
  UpdateEstadoVendedora?: Maybe<Vendedora>;
  UpdateEvento?: Maybe<Evento>;
  UpdateFeria?: Maybe<Feria>;
  UpdateImagen: Imagen;
  UpdatePassword: User;
  UpdatePasswordToten: Toten;
  UpdatePrecioReferencial?: Maybe<Referencial>;
  UpdateUsuario: User;
  UpdateVendedora?: Maybe<Vendedora>;
  ValidacionEntrada?: Maybe<Asistente>;
};


export type MutationAsignarPrecioButacaAbonoArgs = {
  input?: InputMaybe<ButacaInput>;
};


export type MutationAsignarPrecioButacaEventoArgs = {
  input?: InputMaybe<ButacaEventoInput>;
};


export type MutationBuscarPersonaArgs = {
  input: PersonaInput;
};


export type MutationConsultEmailArgs = {
  email: Scalars['String'];
};


export type MutationCreateBloqueoAsientoArgs = {
  input?: InputMaybe<Array<BloqueoAsientoInput>>;
};


export type MutationCreateBloqueoAsientoAbonoArgs = {
  input?: InputMaybe<Array<BloqueoAsientoInput>>;
};


export type MutationCreateEventoArgs = {
  input: EventoInput;
};


export type MutationCreateFeriaArgs = {
  input: FeriaInput;
};


export type MutationCreateImagenArgs = {
  imagen: Scalars['Upload'];
};


export type MutationCreatePedidoArgs = {
  input1: PedidoInput;
  input2?: InputMaybe<Array<DetallePedidoInput>>;
  input3?: InputMaybe<UserInput>;
};


export type MutationCreatePedidoAbonadoArgs = {
  input1: PedidoInput;
  input2?: InputMaybe<Array<DetallePedidoInput>>;
  input3?: InputMaybe<UserInput>;
};


export type MutationCreateShoppingCartArgs = {
  input: ShoppingCartInput;
};


export type MutationCreateShoppingCartAdminArgs = {
  input: ShoppingCartAdminInput;
};


export type MutationCreateSuscriptorArgs = {
  input: SuscriptorInput;
};


export type MutationCreateTotenArgs = {
  input: TotenInput;
};


export type MutationCreateUsuarioArgs = {
  input: UserInput;
};


export type MutationCreateVendedoraArgs = {
  input: VendedoraInput;
};


export type MutationCreateVentaArgs = {
  input1: VentaInput;
  input2?: InputMaybe<Array<DetalleVentaInput>>;
};


export type MutationCreateVentaAbonadoArgs = {
  input1: VentaInput;
  input2?: InputMaybe<Array<DetalleVentaInput>>;
};


export type MutationDeleteAsientoBloqueadoArgs = {
  asientoId: Scalars['Int'];
};


export type MutationDeleteAsientoCarritoArgs = {
  asientoId?: InputMaybe<Scalars['Int']>;
};


export type MutationDeleteEventoArgs = {
  eventoId: Scalars['Int'];
};


export type MutationDeleteFeriaArgs = {
  feriaId: Scalars['Int'];
};


export type MutationDeleteImagenArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteTotenArgs = {
  totenId: Scalars['Int'];
};


export type MutationDeleteVentaArgs = {
  ventaId: Scalars['Int'];
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationLoginTotenArgs = {
  input: LoginTotenInput;
};


export type MutationRecoverPasswordArgs = {
  email?: InputMaybe<Scalars['String']>;
};


export type MutationRestartAsientosArgs = {
  feriaId: Scalars['Int'];
};


export type MutationTransferirEntradaArgs = {
  input: TransferirEntradaInput;
};


export type MutationUpdateAsignacionEntradaArgs = {
  input: AsignacionEntradaInput;
};


export type MutationUpdateAsignacionEntradaVentaArgs = {
  input: AsignacionEntradaVentaInput;
};


export type MutationUpdateAsistenciaArgs = {
  input: UpdateAsistenciaInput;
};


export type MutationUpdateCuentaUsuarioArgs = {
  input?: InputMaybe<UserInput>;
};


export type MutationUpdateEstadoEventoArgs = {
  input: UpdateEstadoEventoInput;
};


export type MutationUpdateEstadoFeriaArgs = {
  input: UpdateEstadoFeriaInput;
};


export type MutationUpdateEstadoTotenArgs = {
  input?: InputMaybe<UpdateEstadoTotenInput>;
};


export type MutationUpdateEstadoVendedoraArgs = {
  input: UpdateEstadoVendedoraInput;
};


export type MutationUpdateEventoArgs = {
  input: EventoInput;
};


export type MutationUpdateFeriaArgs = {
  input: FeriaInput;
};


export type MutationUpdateImagenArgs = {
  id?: InputMaybe<Scalars['Int']>;
  titulo?: InputMaybe<Scalars['String']>;
};


export type MutationUpdatePasswordArgs = {
  input?: InputMaybe<UpdatePasswordInput>;
};


export type MutationUpdatePasswordTotenArgs = {
  input?: InputMaybe<UpdatePasswordTotenInput>;
};


export type MutationUpdatePrecioReferencialArgs = {
  input: ReferencialInput;
};


export type MutationUpdateUsuarioArgs = {
  input?: InputMaybe<UserInput>;
};


export type MutationUpdateVendedoraArgs = {
  input: VendedoraInput;
};


export type MutationValidacionEntradaArgs = {
  constante?: InputMaybe<Scalars['String']>;
  eventoId?: InputMaybe<Scalars['Int']>;
  numeroDocumento?: InputMaybe<Scalars['String']>;
  tipoDocumento?: InputMaybe<Scalars['String']>;
};

/** Allows ordering a list of records. */
export type OrderByClause = {
  /** The column that is used for ordering. */
  field: Scalars['String'];
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Pagination information about the corresponding list of items. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** Count of nodes in current request. */
  count?: Maybe<Scalars['Int']>;
  /** Current page of request. */
  currentPage?: Maybe<Scalars['Int']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Last page in connection. */
  lastPage?: Maybe<Scalars['Int']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** Total number of node in connection. */
  total?: Maybe<Scalars['Int']>;
};

/** Pagination information about the corresponding list of items. */
export type PaginatorInfo = {
  __typename?: 'PaginatorInfo';
  /** Total count of available items in the page. */
  count: Scalars['Int'];
  /** Current pagination page. */
  currentPage: Scalars['Int'];
  /** Index of first item in the current page. */
  firstItem?: Maybe<Scalars['Int']>;
  /** If collection has more pages. */
  hasMorePages: Scalars['Boolean'];
  /** Index of last item in the current page. */
  lastItem?: Maybe<Scalars['Int']>;
  /** Last page number of the collection. */
  lastPage: Scalars['Int'];
  /** Number of items per page in the collection. */
  perPage: Scalars['Int'];
  /** Total items available in the collection. */
  total: Scalars['Int'];
};

export type Pedido = {
  __typename?: 'Pedido';
  DetallePedido?: Maybe<Array<DetallePedido>>;
  Feria?: Maybe<Feria>;
  Usuario?: Maybe<User>;
  email?: Maybe<Scalars['String']>;
  fechaPedido?: Maybe<Scalars['Date']>;
  feriaId?: Maybe<Scalars['Int']>;
  numeroComprobante?: Maybe<Scalars['String']>;
  pedidoId?: Maybe<Scalars['ID']>;
  precioTotal?: Maybe<Scalars['Float']>;
  razonSocial?: Maybe<Scalars['String']>;
  tipoComprobante?: Maybe<Scalars['String']>;
  transaccionId?: Maybe<Scalars['Float']>;
  usuarioId?: Maybe<Scalars['Int']>;
};

export type PedidoInput = {
  fechaPedido?: InputMaybe<Scalars['Date']>;
  feriaId?: InputMaybe<Scalars['Int']>;
  numeroComprobante?: InputMaybe<Scalars['String']>;
  pedidoId?: InputMaybe<Scalars['ID']>;
  precioTotal?: InputMaybe<Scalars['Float']>;
  razonSocial?: InputMaybe<Scalars['String']>;
  tipoComprobante?: InputMaybe<Scalars['String']>;
  transaccionId?: InputMaybe<Scalars['Float']>;
};

export type Persona = {
  __typename?: 'Persona';
  apellidos?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  nombres?: Maybe<Scalars['String']>;
  numeroDocumento?: Maybe<Scalars['String']>;
  tipoDocumento?: Maybe<Scalars['String']>;
};

export type PersonaInput = {
  numeroDocumento?: InputMaybe<Scalars['String']>;
  tipoDocumento?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  GetAllAsientos?: Maybe<Array<Maybe<Asiento>>>;
  GetAllAsientosAbonados?: Maybe<Array<Maybe<Asiento>>>;
  GetAllAsientosBloqueados?: Maybe<Array<Maybe<AsignacionEntrada>>>;
  GetAllBloques?: Maybe<Array<Maybe<Bloque>>>;
  GetAllButacaEvento?: Maybe<GetAllButacaEvento>;
  GetAllButacas?: Maybe<GetAllButacas>;
  GetAllCarrito?: Maybe<GetAllCarrito>;
  GetAllEntradasUsuario?: Maybe<Array<Maybe<AsignacionEntrada>>>;
  GetAllEntradasUsuarioDocumento?: Maybe<Array<Maybe<AsignacionEntrada>>>;
  GetAllEventos?: Maybe<GetAllEventos>;
  GetAllEventosUsuario?: Maybe<GetAllEventos>;
  GetAllFerias?: Maybe<GetAllFerias>;
  GetAllImagenes?: Maybe<GetAllImagenes>;
  GetAllPedidos?: Maybe<GetAllPedidos>;
  GetAllPrecioReferencial?: Maybe<Array<Maybe<Referencial>>>;
  GetAllSuscriptores?: Maybe<GetAllSuscriptores>;
  GetAllToten?: Maybe<Array<Toten>>;
  GetAllUsuarios?: Maybe<GetAllUsuarios>;
  GetAllVendedoras?: Maybe<GetAllVendedoras>;
  GetAllVentas?: Maybe<GetAllVentas>;
  GetDetalleAsientoVenta?: Maybe<AsignacionEntrada>;
  GetEventoSlug?: Maybe<Evento>;
  GetFeriaSlug?: Maybe<Feria>;
  GetPedidoId?: Maybe<Pedido>;
  GetReporteExcel?: Maybe<Scalars['String']>;
  GetUsuario: User;
  GetVendedoraId?: Maybe<Vendedora>;
  GetVentaId?: Maybe<Venta>;
  ReporteAsientoVendedora?: Maybe<Scalars['String']>;
  ReporteGetAllPedidos?: Maybe<Scalars['String']>;
  ReporteGetAllVentas?: Maybe<Scalars['String']>;
};


export type QueryGetAllAsientosArgs = {
  eventoId?: InputMaybe<Scalars['Int']>;
  feriaId?: InputMaybe<Scalars['Int']>;
  tendido?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllAsientosAbonadosArgs = {
  feriaId?: InputMaybe<Scalars['Int']>;
  tendido?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllBloquesArgs = {
  feriaId?: InputMaybe<Scalars['Int']>;
  tendido?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllButacaEventoArgs = {
  eventoId?: InputMaybe<Scalars['Int']>;
  tendido?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllButacasArgs = {
  feriaId?: InputMaybe<Scalars['Int']>;
  tendido?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllEntradasUsuarioArgs = {
  eventoId?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllEntradasUsuarioDocumentoArgs = {
  eventoId?: InputMaybe<Scalars['Int']>;
  numeroDocumento?: InputMaybe<Scalars['String']>;
  tipoDocumento?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllEventosArgs = {
  estado?: InputMaybe<Scalars['String']>;
  feriaSlug?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllImagenesArgs = {
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllPedidosArgs = {
  email?: InputMaybe<Scalars['String']>;
  fechaFinal?: InputMaybe<Scalars['String']>;
  fechaInicial?: InputMaybe<Scalars['String']>;
  feriaId?: InputMaybe<Scalars['Int']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
  razonSocial?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllSuscriptoresArgs = {
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllUsuariosArgs = {
  apellidos?: InputMaybe<Scalars['String']>;
  nombres?: InputMaybe<Scalars['String']>;
  numeroDocumento?: InputMaybe<Scalars['String']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
  tipoDocumento?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllVendedorasArgs = {
  estado?: InputMaybe<Scalars['String']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllVentasArgs = {
  fechaFinal?: InputMaybe<Scalars['String']>;
  fechaInicial?: InputMaybe<Scalars['String']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
  tipoVenta?: InputMaybe<Scalars['String']>;
  vendedorId?: InputMaybe<Scalars['Int']>;
};


export type QueryGetDetalleAsientoVentaArgs = {
  code?: InputMaybe<Scalars['String']>;
};


export type QueryGetEventoSlugArgs = {
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryGetFeriaSlugArgs = {
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryGetPedidoIdArgs = {
  pedidoId?: InputMaybe<Scalars['Int']>;
};


export type QueryGetReporteExcelArgs = {
  pedidoId: Scalars['Int'];
};


export type QueryGetVendedoraIdArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type QueryGetVentaIdArgs = {
  ventaId?: InputMaybe<Scalars['Int']>;
};


export type QueryReporteAsientoVendedoraArgs = {
  code?: InputMaybe<Scalars['String']>;
};


export type QueryReporteGetAllPedidosArgs = {
  email?: InputMaybe<Scalars['String']>;
  fechaFinal?: InputMaybe<Scalars['String']>;
  fechaInicial?: InputMaybe<Scalars['String']>;
  razonSocial?: InputMaybe<Scalars['String']>;
};


export type QueryReporteGetAllVentasArgs = {
  fechaFinal?: InputMaybe<Scalars['String']>;
  fechaInicial?: InputMaybe<Scalars['String']>;
  tipoVenta?: InputMaybe<Scalars['String']>;
  vendedorId?: InputMaybe<Scalars['Int']>;
};

export type Referencial = {
  __typename?: 'Referencial';
  precio?: Maybe<Scalars['Float']>;
  referenciaId?: Maybe<Scalars['ID']>;
  tendido?: Maybe<Scalars['String']>;
  titulo?: Maybe<Scalars['String']>;
};

export type ReferencialInput = {
  precio?: InputMaybe<Scalars['Float']>;
  referenciaId?: InputMaybe<Scalars['ID']>;
};

export type ShoppingCart = {
  __typename?: 'ShoppingCart';
  Evento?: Maybe<Evento>;
  Feria?: Maybe<Feria>;
  asiento?: Maybe<Scalars['String']>;
  asientoId?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['String']>;
  codigo?: Maybe<Scalars['String']>;
  datetimeOfExpiry: Scalars['String'];
  eventoId?: Maybe<Scalars['Int']>;
  feriaId?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  precio?: Maybe<Scalars['Float']>;
  reservado?: Maybe<Scalars['String']>;
  shoppingCartId?: Maybe<Scalars['Int']>;
  tendido?: Maybe<Scalars['String']>;
  userId: Scalars['ID'];
};

export type ShoppingCartAdminInput = {
  asiento: Scalars['String'];
  codigo: Scalars['String'];
  eventoId: Scalars['ID'];
  userId: Scalars['ID'];
};

export type ShoppingCartInput = {
  asiento: Scalars['String'];
  codigo: Scalars['String'];
  eventoId: Scalars['ID'];
};

/** The available directions for ordering a list of records. */
export enum SortOrder {
  /** Sort records in ascending order. */
  Asc = 'ASC',
  /** Sort records in descending order. */
  Desc = 'DESC'
}

export type Suscriptor = {
  __typename?: 'Suscriptor';
  email?: Maybe<Scalars['String']>;
  nombres?: Maybe<Scalars['String']>;
  suscriptorId?: Maybe<Scalars['ID']>;
};

export type SuscriptorInput = {
  email?: InputMaybe<Scalars['String']>;
  nombres?: InputMaybe<Scalars['String']>;
};

export type Toten = {
  __typename?: 'Toten';
  estado?: Maybe<Scalars['String']>;
  nombres?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  totenId?: Maybe<Scalars['ID']>;
  usuario?: Maybe<Scalars['String']>;
};

export type TotenInput = {
  nombres?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
  totenId?: InputMaybe<Scalars['ID']>;
  usuario?: InputMaybe<Scalars['String']>;
};

export type TransferirEntrada = {
  __typename?: 'TransferirEntrada';
  Evento?: Maybe<Evento>;
  Feria?: Maybe<Feria>;
  apellidos?: Maybe<Scalars['String']>;
  asientoId?: Maybe<Scalars['ID']>;
  codigo?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
  eventoId?: Maybe<Scalars['Int']>;
  fecha?: Maybe<Scalars['Date']>;
  feriaId?: Maybe<Scalars['Int']>;
  hora?: Maybe<Scalars['String']>;
  nombres?: Maybe<Scalars['String']>;
  numeroDocumento?: Maybe<Scalars['String']>;
  tendido?: Maybe<Scalars['String']>;
  tipoDocumento?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
};

export type TransferirEntradaInput = {
  asientoId?: InputMaybe<Scalars['ID']>;
  userId?: InputMaybe<Scalars['Int']>;
};

/** Specify if you want to include or exclude trashed results from a query. */
export enum Trashed {
  /** Only return trashed results. */
  Only = 'ONLY',
  /** Return both trashed and non-trashed results. */
  With = 'WITH',
  /** Only return non-trashed results. */
  Without = 'WITHOUT'
}

export type UpdateAsistenciaInput = {
  asientoId?: InputMaybe<Scalars['ID']>;
  constante?: InputMaybe<Scalars['String']>;
  numeroDocumento?: InputMaybe<Scalars['String']>;
  tipoDocumento?: InputMaybe<Scalars['String']>;
};

export type UpdateEstadoEventoInput = {
  estado?: InputMaybe<Scalars['String']>;
  eventoId?: InputMaybe<Scalars['ID']>;
};

export type UpdateEstadoFeriaInput = {
  estado?: InputMaybe<Scalars['String']>;
  feriaId?: InputMaybe<Scalars['Int']>;
};

export type UpdateEstadoTotenInput = {
  estado?: InputMaybe<Scalars['String']>;
  totenId?: InputMaybe<Scalars['Int']>;
};

export type UpdateEstadoVendedoraInput = {
  estado?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
};

export type UpdatePasswordInput = {
  passwordAntiguo?: InputMaybe<Scalars['String']>;
  passwordNuevo?: InputMaybe<Scalars['String']>;
};

export type UpdatePasswordTotenInput = {
  passwordNuevo?: InputMaybe<Scalars['String']>;
  usuario?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  apellidos?: Maybe<Scalars['String']>;
  apiToken?: Maybe<Scalars['String']>;
  celular?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  nombres?: Maybe<Scalars['String']>;
  numeroDocumento?: Maybe<Scalars['String']>;
  tipoDocumento?: Maybe<Scalars['String']>;
  tipoUsuario?: Maybe<Scalars['Int']>;
};

export type UserInput = {
  apellidos?: InputMaybe<Scalars['String']>;
  celular?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  nombres?: InputMaybe<Scalars['String']>;
  numeroDocumento?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  tipoDocumento?: InputMaybe<Scalars['String']>;
};

export type Vendedora = {
  __typename?: 'Vendedora';
  apellidos?: Maybe<Scalars['String']>;
  celular?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  nombres?: Maybe<Scalars['String']>;
  numeroDocumento?: Maybe<Scalars['String']>;
  tipoDocumento?: Maybe<Scalars['String']>;
};

export type VendedoraInput = {
  apellidos?: InputMaybe<Scalars['String']>;
  celular?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  nombres?: InputMaybe<Scalars['String']>;
  numeroDocumento?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  tipoDocumento?: InputMaybe<Scalars['String']>;
};

export type Venta = {
  __typename?: 'Venta';
  DetalleVenta?: Maybe<Array<DetalleVenta>>;
  Usuario?: Maybe<User>;
  celular?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  fechaVenta?: Maybe<Scalars['Date']>;
  numeroDocumento?: Maybe<Scalars['String']>;
  precioTotal?: Maybe<Scalars['Float']>;
  razonSocial?: Maybe<Scalars['String']>;
  tipoComprobante?: Maybe<Scalars['String']>;
  tipoDocumento?: Maybe<Scalars['String']>;
  tipoVenta?: Maybe<Scalars['String']>;
  usuarioId?: Maybe<Scalars['Int']>;
  ventaId?: Maybe<Scalars['ID']>;
};

export type VentaInput = {
  celular?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  fechaVenta?: InputMaybe<Scalars['Date']>;
  numeroDocumento?: InputMaybe<Scalars['String']>;
  precioTotal?: InputMaybe<Scalars['Float']>;
  razonSocial?: InputMaybe<Scalars['String']>;
  tipoComprobante?: InputMaybe<Scalars['String']>;
  tipoDocumento?: InputMaybe<Scalars['String']>;
  tipoVenta?: InputMaybe<Scalars['String']>;
  transaccionId?: InputMaybe<Scalars['Float']>;
  ventaId?: InputMaybe<Scalars['ID']>;
};

export type LoginTotenMutationVariables = Exact<{
  input: LoginTotenInput;
}>;


export type LoginTotenMutation = { __typename?: 'Mutation', LoginToten?: { __typename?: 'Toten', totenId?: string | null, usuario?: string | null, nombres?: string | null, token?: string | null, estado?: string | null } | null };

export type BuscarPersonaMutationVariables = Exact<{
  input: PersonaInput;
}>;


export type BuscarPersonaMutation = { __typename?: 'Mutation', BuscarPersona?: { __typename?: 'Persona', id?: string | null, nombres?: string | null, apellidos?: string | null, tipoDocumento?: string | null, numeroDocumento?: string | null } | null };

export type GetAllEventosQueryVariables = Exact<{
  feriaSlug?: InputMaybe<Scalars['String']>;
  estado?: InputMaybe<Scalars['String']>;
}>;


export type GetAllEventosQuery = { __typename?: 'Query', GetAllEventos?: { __typename?: 'GetAllEventos', numeroTotal?: number | null, data?: Array<{ __typename?: 'Evento', titulo?: string | null, fecha?: any | null, eventoId?: string | null, descripcionCorta?: string | null }> | null } | null };

export type GetAllFeriasQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllFeriasQuery = { __typename?: 'Query', GetAllFerias?: { __typename?: 'GetAllFerias', data?: Array<{ __typename?: 'Feria', titulo?: string | null, tipoColiseo?: string | null, terminosCondiciones?: string | null, slug?: string | null, feriaId?: string | null, descripcionLarga?: string | null, descripcionCorta?: string | null, imagenPrincipal?: { __typename?: 'Imagen', titulo?: string | null, id?: string | null, url?: string | null, created_at?: any | null } | null }> | null } | null };

export type GetAllEntradasUsuarioDocumentoQueryVariables = Exact<{
  eventoId?: InputMaybe<Scalars['Int']>;
  tipoDocumento?: InputMaybe<Scalars['String']>;
  numeroDocumento?: InputMaybe<Scalars['String']>;
}>;


export type GetAllEntradasUsuarioDocumentoQuery = { __typename?: 'Query', GetAllEntradasUsuarioDocumento?: Array<{ __typename?: 'AsignacionEntrada', asiento?: string | null, codigo?: string | null, fecha?: any | null, hora?: string | null, nombres?: string | null, Evento?: { __typename?: 'Evento', descripcionCorta?: string | null, estado?: string | null, eventoId?: string | null, fecha?: any | null, feriaId?: number | null, hora?: string | null, slug?: string | null, titulo?: string | null } | null } | null> | null };


export const LoginTotenDocument = gql`
    mutation LoginToten($input: LoginTotenInput!) {
  LoginToten(input: $input) {
    totenId
    usuario
    nombres
    token
    estado
  }
}
    `;
export const BuscarPersonaDocument = gql`
    mutation BuscarPersona($input: PersonaInput!) {
  BuscarPersona(input: $input) {
    id
    nombres
    apellidos
    tipoDocumento
    numeroDocumento
  }
}
    `;
export const GetAllEventosDocument = gql`
    query GetAllEventos($feriaSlug: String, $estado: String) {
  GetAllEventos(feriaSlug: $feriaSlug, estado: $estado) {
    numeroTotal
    data {
      titulo
      fecha
      eventoId
      descripcionCorta
    }
  }
}
    `;
export const GetAllFeriasDocument = gql`
    query GetAllFerias {
  GetAllFerias {
    data {
      titulo
      tipoColiseo
      terminosCondiciones
      slug
      imagenPrincipal {
        titulo
        id
        url
        created_at
      }
      feriaId
      descripcionLarga
      descripcionCorta
    }
  }
}
    `;
export const GetAllEntradasUsuarioDocumentoDocument = gql`
    query GetAllEntradasUsuarioDocumento($eventoId: Int, $tipoDocumento: String, $numeroDocumento: String) {
  GetAllEntradasUsuarioDocumento(
    eventoId: $eventoId
    tipoDocumento: $tipoDocumento
    numeroDocumento: $numeroDocumento
  ) {
    asiento
    codigo
    fecha
    hora
    Evento {
      descripcionCorta
      estado
      eventoId
      fecha
      feriaId
      hora
      slug
      titulo
    }
    nombres
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    LoginToten(variables: LoginTotenMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<LoginTotenMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<LoginTotenMutation>(LoginTotenDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'LoginToten', 'mutation');
    },
    BuscarPersona(variables: BuscarPersonaMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<BuscarPersonaMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<BuscarPersonaMutation>(BuscarPersonaDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'BuscarPersona', 'mutation');
    },
    GetAllEventos(variables?: GetAllEventosQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetAllEventosQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllEventosQuery>(GetAllEventosDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAllEventos', 'query');
    },
    GetAllFerias(variables?: GetAllFeriasQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetAllFeriasQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllFeriasQuery>(GetAllFeriasDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAllFerias', 'query');
    },
    GetAllEntradasUsuarioDocumento(variables?: GetAllEntradasUsuarioDocumentoQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetAllEntradasUsuarioDocumentoQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllEntradasUsuarioDocumentoQuery>(GetAllEntradasUsuarioDocumentoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAllEntradasUsuarioDocumento', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;