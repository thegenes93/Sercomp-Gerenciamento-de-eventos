"use strict";
module.exports = app => {
    const hackday = async (req, res) => {
        res.render("hackday", { erro: {}, campo: {} })
    }

    const cadhack = async (req, res) => {
        res.render("cadhack", { erro: {}, campo: {} })
    }

    const admin = async (req, res) => {
        res.render("admin")
    }

    const cadhackpc = async (req, res) => {
        res.render("cadhack-desc", { erro: {}, campo: {} })
    }

    const index = async (req, res) => {
        res.render("index-mobile", { erro: {}, campo: {} })
    }

    const submissao = async (req, res) => {
        res.render("submissao", { erro: {}, campo: {} })
    }

    const agenda = async (req, res) => {
        res.render("tela-agenda", { erro: {}, campo: {} })
    }

    const home = async (req, res) => {
        res.render("tela-home", { erro: {}, campo: {} })
    }

    const homepc = async (req, res) => {
        res.render("tela-home-desc", { erro: {}, campo: {} })
    }

    const agendapc = async (req, res) => {
        res.render("tela-agenda-desc", { erro: {}, campo: {} })
    }
    const perfilpc = async (req, res) => {
        res.render("tela-perfil-desc", { erro: {}, campo: {} })
    }
    const perfil = async (req, res) => {
        res.render("tela-perfil", { erro: {}, campo: {} })
    }

    const index2 = async (req, res) => {
        res.render("index2", { erro: {}, campo: {} })
    }

    const cursos = async (req, res) => {
        res.render("tela-minicursos", { erro: {}, campo: {} })
    }




    return {cursos ,admin ,cadhackpc ,perfilpc ,hackday, index, submissao, agenda, home, perfil, cadhack, homepc, index2, cadhackpc, agendapc }
}