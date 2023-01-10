export enum Color {
    rojo = 'rojo', negro = 'negro', azul = 'azul', verde = 'verde', amarillo = 'amarillo', anaranjado = 'anaranjado'
}


export interface Heroe {
    nombre: string
    categoria: string
    capa: boolean
    superPoder: string
    color: Color
}