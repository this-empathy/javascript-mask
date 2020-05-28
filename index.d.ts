declare module "@this-empathy/javascript-mask" {

    export interface DateMask {
        value: string;
        opt: {literal: string, format: string, era: boolean}
    }


    export function account (value: string): string;
    export function agency (value: string): string;
    export function carPlate (value: string): string;
    export function cep (value: string): string;
    export function cnpj (value: string): string;
    export function cpf (value: string): string;
    export function cpfCnpj (value: string): string;
    export function date (value: string, locale?: string): DateMask;
    export function hour (value: string): string;
    export function letters (value: string): string;
    export function millisecondsToDate (value: string): string;
    export function millisecondsToDateHour (value: string): string;
    export function millisecondsToHour (value: string): string;
    export function money (value: string): string;
    export function number (value: string): string;
    export function phone (value: string): string;
    export function rg (value: string): string;
    export function percentage (value: string): string;
}