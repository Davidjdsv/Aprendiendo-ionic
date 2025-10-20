import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';

@Component({
  selector: 'app-mcp-page-tuto',
  templateUrl: './mcp-page-tuto.page.html',
  styleUrls: ['./mcp-page-tuto.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent]
})
export class McpPageTutoPage implements OnInit {

  weatherResult: string = '';

  constructor() { }

  ngOnInit() {
    // Inicializar el servidor MCP cuando se carga el componente
    this.setupMcpServer();
  }

  // 1. Crear el servidor MCP
  // Es la interfaz principal con el protocolo MCP. 
  // Maneja la comunicación entre el cliente (tu app) y el servidor (las herramientas).
  mcpServer = new McpServer({
    name: "demo",
    version: "1.0.0"
  });

  // Método para configurar el servidor y registrar las herramientas
  setupMcpServer() {
    // 2. Definir las herramientas (Tools)
    // Las herramientas le permiten al LLM realizar acciones a través de tu servidor.
    
    // Herramienta: Obtener el clima de una ciudad
    this.mcpServer.registerTool(
      'fetch-weather', // Nombre único de la herramienta
      {
        title: 'Obtener Clima', // Título descriptivo para mostrar en UI
        description: 'Tool to fetch the weather of a city', // Descripción de qué hace
        
        // inputSchema: Define qué parámetros recibe la herramienta
        inputSchema: { 
          city: z.string().describe('City name') // z de Zod para validación de tipos
        },
        
        // outputSchema: Define qué retorna la herramienta
        outputSchema: { 
          temperature: z.number(),
          condition: z.string()
        }
      },
      
      // Handler: La función que se ejecuta cuando se llama la herramienta
      // Recibe los parámetros definidos en inputSchema ({ city })
      async ({ city }) => {
        // Aquí va la lógica de lo que queremos que haga la herramienta
        
        // Por ahora, simulamos una respuesta (en producción llamarías a una API real)
        const output = {
          temperature: 25,
          condition: `El clima de ${city} es soleado`
        };
        
        // Retornamos en el formato que MCP espera
        return {
          // content: Array de contenido que puede ser texto, imágenes, etc.
          content: [
            { 
              type: 'text', 
              text: `El clima de ${city} es soleado` 
            }
          ],
          // structuredContent: Los datos estructurados (opcional pero útil)
          structuredContent: output
        };
      }
    );

    console.log('Servidor MCP configurado correctamente');
  }

  // Método para probar la herramienta desde tu UI de Ionic
  async testWeatherTool() {
    try {
      // Aquí simularíamos llamar a la herramienta
      // En un caso real, esto lo haría el cliente MCP o Claude
      const city = 'Tuluá';
      
      // Por ahora solo mostramos un mensaje de ejemplo
      this.weatherResult = `Herramienta registrada: fetch-weather para la ciudad ${city}`;
      
      console.log('Herramienta de clima probada');
    } catch (error) {
      console.error('Error al probar la herramienta:', error);
      this.weatherResult = 'Error al obtener el clima';
    }
  }

}
