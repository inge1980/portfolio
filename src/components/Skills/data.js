import rag from "../../img/rag.png";
import llm from "../../img/llm.png";
import embeddings from "../../img/embeddings.png";
import pgvector from "../../img/pgvector.png";
import ollama from "../../img/ollama.png";
import semanticsearch from "../../img/semanticsearch.png";
import figma from "../../img/figma.png";
import axd from "../../img/adobexd.png";
import ps from "../../img/photoshop.png";
import gimp from "../../img/gimp.png";
import ap from "../../img/adobepremiere.png";
import threeds from "../../img/3dsmax.png";
import js from "../../img/js.png";
import ts from "../../img/ts.png";
import react from "../../img/react.png";
import reactnative from "../../img/reactnative.png";
import php from "../../img/php.png";
import csharp from "../../img/csharp.png";
import dotnet from "../../img/dotnet.png";
import nodejs from "../../img/nodejs.png";
import restapi from "../../img/rest-api.png";
import html from "../../img/html.png";
import css from "../../img/css.png";
import bootstrap from "../../img/bootstrap.png";
import mui from "../../img/mui.png";
import mssql from "../../img/mssql.png";
import mysql from "../../img/mysql.png";
import postgresql from "../../img/postgresql.png";
import sqlite from "../../img/sqlite.png";
import azure from "../../img/azure.png";
import docker from "../../img/docker.png";
import iis from "../../img/iis.png";
import awss3 from "../../img/awss3.png";
import jqm from "../../img/jquerymobile.png";
import bb from "../../img/backbone.png";
import under from "../../img/underscore.png";
import chart from "../../img/chartjs.png";
import wp from "../../img/wordpress.png";
import ckedit from "../../img/ckeditor4.png";
import fa from "../../img/fontawesome.png";
import perl from "../../img/perl.png";
import fancy from "../../img/fancybox.png";
import jwp from "../../img/jwplayer.png";
import phpsh from "../../img/phpspreadsheet.png";
import phpmail from "../../img/phpmailer.png";
import emailjs from "../../img/emailjs.png";
import git from "../../img/git.png";
import gh from "../../img/github.png";
import azuredevops from "../../img/azuredevops.png";
import swagger from "../../img/swagger.png";
import vscode from "../../img/vscode.png";
import phpst from "../../img/phpstorm.png";
import ssms from "../../img/ssms.png";
import terraform from "../../img/terraform.png";
import gdt from "../../img/googledevtools.png";
import myadmin from "../../img/phpmyadmin.png";
import wamp from "../../img/wampserver.png";
import recap from "../../img/recaptcha.png";
import svn from "../../img/subversion.png";
import asana from "../../img/asana.png";

const SkillCategories = {
  "Development": [
    {
      skillName: "JavaScript",
      logo: js,
      monthsOfExperience: 192,
      projects: 9,
      experienceType: "professional",
      level: "advanced",
      featured: true,
    },
    {
      skillName: "TypeScript",
      logo: ts,
      monthsOfExperience: 25,
      projects: 3,
      experienceType: "professional",
      level: "advanced",
      featured: true,
    },
    {
      skillName: "React",
      logo: react,
      monthsOfExperience: 49,
      projects: 3,
      experienceType: "professional",
      level: "advanced",
      featured: true,
    },
    {
      skillName: "React Native",
      logo: reactnative,
      monthsOfExperience: 25,
      projects: 1,
      experienceType: "professional",
      level: "advanced",
      featured: true,
    },
    {
      skillName: "PHP",
      logo: php,
      monthsOfExperience: 139,
      projects: 6,
      experienceType: "professional",
      level: "intermediate",
      featured: true,
    },
    {
      skillName: "C#",
      logo: csharp,
      monthsOfExperience: 6,
      projects: 4,
      experienceType: "professional",
      level: "intermediate",
      featured: true,
    },
    {
      skillName: ".NET",
      logo: dotnet,
      monthsOfExperience: 6,
      projects: 4,
      experienceType: "professional",
      level: "intermediate",
      featured: true,
    },
    {
      skillName: "Node.js",
      logo: nodejs,
      monthsOfExperience: 25,
      projects: 2,
      experienceType: "professional",
      level: "intermediate",
      featured: true,
    },
    {
      skillName: "REST APIs",
      logo: restapi,
      monthsOfExperience: 88,
      projects: 4,
      experienceType: "professional",
      level: "intermediate",
      featured: true,
    },
    {
      skillName: "HTML",
      logo: html,
      monthsOfExperience: 200,
      projects: 40,
      experienceType: "professional",
      level: "advanced",
      featured: false,
    },
    {
      skillName: "CSS",
      logo: css,
      monthsOfExperience: 200,
      projects: 40,
      experienceType: "professional",
      level: "advanced",
      featured: false,
    },
    {
      skillName: "Bootstrap",
      logo: bootstrap,
      monthsOfExperience: 157,
      projects: 21,
      experienceType: "professional",
      level: "intermediate",
      featured: false,
    },
    {
      skillName: "Material UI",
      logo: mui,
      monthsOfExperience: 26,
      projects: 2,
      experienceType: "professional",
      level: "intermediate",
      featured: false,
    },
  ],

  "Data, Cloud & Infrastructure": [
    {
      skillName: "SQL Server",
      logo: mssql,
      monthsOfExperience: 31,
      projects: 8,
      experienceType: "professional",
      level: "intermediate",
      featured: true,
    },
    {
      skillName: "PostgreSQL",
      logo: postgresql,
      monthsOfExperience: 25,
      projects: 3,
      experienceType: "professional",
      level: "intermediate",
      featured: true,
    },
    {
      skillName: "MySQL",
      logo: mysql,
      monthsOfExperience: 108,
      projects: 2,
      experienceType: "professional",
      level: "intermediate",
      featured: true,
    },
    {
      skillName: "Azure",
      logo: azure,
      monthsOfExperience: 1,
      projects: 1,
      experienceType: "professional",
      level: "intermediate",
      featured: true,
    },
    {
      skillName: "Docker",
      logo: docker,
      monthsOfExperience: 3,
      projects: 3,
      experienceType: "professional",
      level: "intermediate",
      featured: true,
    },
    {
      skillName: "AWS S3",
      logo: awss3,
      monthsOfExperience: 6,
      projects: 2,
      experienceType: "professional",
      level: "intermediate",
      featured: false,
    },
    {
      skillName: "SQLite",
      logo: sqlite,
      monthsOfExperience: 25,
      projects: 3,
      experienceType: "professional",
      level: "intermediate",
      featured: false,
    },
    {
      skillName: "Terraform",
      logo: terraform,
      monthsOfExperience: 1,
      projects: 1,
      experienceType: "professional",
      level: "familiar",
      featured: false,
    },
    {
      skillName: "MS IIS",
      logo: iis,
      monthsOfExperience: 31,
      projects: 8,
      experienceType: "professional",
      level: "intermediate",
      featured: false,
    },
  ],

  "AI & Modern Development": [
    {
      skillName: "RAG",
      logo: rag,
      monthsOfExperience: 2,
      projects: 1,
      experienceType: "personal",
      level: "intermediate",
      featured: true,
    },
    {
      skillName: "LLM Integration",
      logo: llm,
      monthsOfExperience: 3,
      projects: 2,
      experienceType: "personal",
      level: "intermediate",
      featured: true,
    },
    {
      skillName: "Embeddings",
      logo: embeddings,
      monthsOfExperience: 2,
      projects: 1,
      experienceType: "personal",
      level: "intermediate",
      featured: true,
    },
    {
      skillName: "Semantic Search",
      logo: semanticsearch,
      monthsOfExperience: 2,
      projects: 1,
      experienceType: "personal",
      level: "intermediate",
      featured: true,
    },
    {
      skillName: "pgvector",
      logo: pgvector,
      monthsOfExperience: 2,
      projects: 1,
      experienceType: "personal",
      level: "familiar",
      featured: false,
    },
    {
      skillName: "Ollama",
      logo: ollama,
      monthsOfExperience: 2,
      projects: 1,
      experienceType: "personal",
      level: "familiar",
      featured: false,
    },
  ],

  "Tools & Practices": [
    {
      skillName: "Git",
      logo: git,
      monthsOfExperience: 50,
      projects: 32,
      experienceType: "professional",
      level: "advanced",
      featured: true,
    },
    {
      skillName: "GitHub",
      logo: gh,
      monthsOfExperience: 50,
      projects: 32,
      experienceType: "professional",
      level: "advanced",
      featured: true,
    },
    {
      skillName: "Azure DevOps",
      logo: azuredevops,
      monthsOfExperience: 1,
      projects: 1,
      experienceType: "professional",
      level: "intermediate",
      featured: true,
    },
    {
      skillName: "Swagger / OpenAPI",
      logo: swagger,
      monthsOfExperience: 10,
      projects: 2,
      experienceType: "professional",
      level: "intermediate",
      featured: false,
    },
    {
      skillName: "Subversion",
      logo: svn,
      monthsOfExperience: 108,
      projects: 21,
      experienceType: "professional",
      level: "familiar",
      featured: false,
    },
    {
      skillName: "Asana",
      logo: asana,
      monthsOfExperience: 139,
      projects: 21,
      experienceType: "professional",
      level: "familiar",
      featured: false,
    },
    {
      skillName: "Visual Studio Code",
      logo: vscode,
      monthsOfExperience: 41,
      projects: 21,
      experienceType: "professional",
      level: "advanced",
      featured: false,
    },
    {
      skillName: "PhpStorm",
      logo: phpst,
      monthsOfExperience: 108,
      projects: 21,
      experienceType: "professional",
      level: "intermediate",
      featured: false,
    },
    {
      skillName: "SSMS",
      logo: ssms,
      monthsOfExperience: 31,
      projects: 8,
      experienceType: "professional",
      level: "intermediate",
      featured: false,
    },
    {
      skillName: "Google DevTools",
      logo: gdt,
      monthsOfExperience: null,
      projects: null,
      experienceType: "professional",
      level: "intermediate",
      featured: false,
    },
    {
      skillName: "PhpMyAdmin",
      logo: myadmin,
      monthsOfExperience: 108,
      projects: 21,
      experienceType: "professional",
      level: "intermediate",
      featured: false,
    },
    {
      skillName: "WampServer",
      logo: wamp,
      monthsOfExperience: 108,
      projects: 21,
      experienceType: "professional",
      level: "familiar",
      featured: false,
    },
    {
      skillName: "reCAPTCHA",
      logo: recap,
      monthsOfExperience: 4,
      projects: 1,
      experienceType: "professional",
      level: "familiar",
      featured: false,
    },
  ],

  "Design & Creative Tools": [
    {
      skillName: "Figma",
      logo: figma,
      monthsOfExperience: 6,
      projects: 1,
      experienceType: "professional",
      level: "intermediate",
      featured: true,
    },
    {
      skillName: "Adobe Photoshop",
      logo: ps,
      monthsOfExperience: null,
      projects: null,
      experienceType: "personal",
      level: "intermediate",
      featured: false,
    },
    {
      skillName: "Adobe XD",
      logo: axd,
      monthsOfExperience: null,
      projects: null,
      experienceType: "personal",
      level: "familiar",
      featured: false,
    },
    {
      skillName: "GIMP",
      logo: gimp,
      monthsOfExperience: null,
      projects: null,
      experienceType: "personal",
      level: "familiar",
      featured: false,
    },
    {
      skillName: "Adobe Premiere",
      logo: ap,
      monthsOfExperience: null,
      projects: null,
      experienceType: "personal",
      level: "familiar",
      featured: false,
    },
    {
      skillName: "Autodesk 3ds Max",
      logo: threeds,
      monthsOfExperience: null,
      projects: null,
      experienceType: "personal",
      level: "familiar",
      featured: false,
    },
  ],

  "Additional Technologies": [
    {
      skillName: "jQuery",
      logo: jqm,
      monthsOfExperience: 108,
      projects: 21,
      experienceType: "professional",
      level: "intermediate",
      featured: false,
    },
    {
      skillName: "Backbone.js",
      logo: bb,
      monthsOfExperience: 9,
      projects: 1,
      experienceType: "professional",
      level: "familiar",
      featured: false,
    },
    {
      skillName: "Underscore.js",
      logo: under,
      monthsOfExperience: 9,
      projects: 1,
      experienceType: "professional",
      level: "familiar",
      featured: false,
    },
    {
      skillName: "Chart.js",
      logo: chart,
      monthsOfExperience: null,
      projects: null,
      experienceType: "professional",
      level: "intermediate",
      featured: false,
    },
    {
      skillName: "WordPress",
      logo: wp,
      monthsOfExperience: 48,
      projects: 3,
      experienceType: "professional",
      level: "intermediate",
      featured: false,
    },
    {
      skillName: "CKEditor",
      logo: ckedit,
      monthsOfExperience: null,
      projects: null,
      experienceType: "professional",
      level: "familiar",
      featured: false,
    },
    {
      skillName: "FontAwesome",
      logo: fa,
      monthsOfExperience: 139,
      projects: 21,
      experienceType: "professional",
      level: "intermediate",
      featured: false,
    },
    {
      skillName: "Perl",
      logo: perl,
      monthsOfExperience: 35,
      projects: 1,
      experienceType: "professional",
      level: "familiar",
      featured: false,
    },
    {
      skillName: "Fancybox",
      logo: fancy,
      monthsOfExperience: null,
      projects: null,
      experienceType: "professional",
      level: "familiar",
      featured: false,
    },
    {
      skillName: "JW Player",
      logo: jwp,
      monthsOfExperience: null,
      projects: null,
      experienceType: "professional",
      level: "familiar",
      featured: false,
    },
    {
      skillName: "PhpSpreadsheet",
      logo: phpsh,
      monthsOfExperience: 9,
      projects: 1,
      experienceType: "professional",
      level: "intermediate",
      featured: false,
    },
    {
      skillName: "PHPMailer",
      logo: phpmail,
      monthsOfExperience: null,
      projects: null,
      experienceType: "professional",
      level: "intermediate",
      featured: false,
    },
    {
      skillName: "EmailJS",
      logo: emailjs,
      monthsOfExperience: 4,
      projects: 1,
      experienceType: "professional",
      level: "familiar",
      featured: false,
    },
  ],
};

export default SkillCategories;