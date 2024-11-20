import { Request, Response } from "express";

import { prisma } from '../data/postgres';


export class AdminController {

    // DI
    constructor( ) { }

    getAtletas = async (req: Request, res: Response) => {

        try {
            const atletas = await prisma.atleta.findMany({
                include: {
                    Resultados: true, // Incluye los resultados
                    Pais: true, // Incluye la información del país
                },
            });

            return res.status(200).json(atletas);
        } catch (error) {
            console.error('Error al obtener los atletas:', error);
            return res.status(500).json({ message: 'Error al obtener los atletas.' });
        }

    }

    getCompetencias = async (req: Request, res: Response) => {

        try {
            const competencias = await prisma.competencia.findMany({
                include: {
                    Eventos: true,
                }
            });

            return res.status(200).json(competencias);
        } catch (error) {
            console.error('Error al obtener las competencias:', error);
            return res.status(500).json({ message: 'Error al obtener las competencias.' });
        }

    }

    getEventos = async (req: Request, res: Response) => {

        try {
            const eventos = await prisma.evento.findMany({
                include: {
                    Competencia: true,
                    Resultados: true,
                }
            });

            return res.status(200).json(eventos);
        } catch (error) {
            console.error('Error al obtener los eventos:', error);
            return res.status(500).json({ message: 'Error al obtener los eventos.' });
        }

    }

    getPaises = async (req: Request, res: Response) => {

        try {
            const paises = await prisma.pais.findMany({});

            return res.status(200).json(paises);
        } catch (error) {
            console.error('Error al obtener los paises:', error);
            return res.status(500).json({ message: 'Error al obtener los paises.' });
        }

    }

    getResultados = async (req: Request, res: Response) => {

        try {
            const resultados = await prisma.resultado.findMany({
                include: {
                    Atleta: true,
                    Evento: true,
                }
            });

            return res.status(200).json(resultados);
        } catch (error) {
            console.error('Error al obtener los resultados:', error);
            return res.status(500).json({ message: 'Error al obtener los resultados.' });
        }

    }

}