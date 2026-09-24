import axios from 'axios';

const SPRING_BOOT_URL = process.env.SPRING_BOOT_URL || 'http://localhost:8080';
const INTERNAL_SECRET = process.env.INTERNAL_API_SECRET;
const COURSE_ID = process.env.COURSE_ID || 'DEFAULT';

export class SpringBootProgressStore {
  /**
   * Obtiene el progreso desde Spring Boot y lo mapea al contrato { doc, updatedAt }
   */
  async get(studentKey) {
    try {
      const response = await axios.get(`${SPRING_BOOT_URL}/api/v1/progress`, {
        headers: {
          'X-Internal-Secret': INTERNAL_SECRET,
          'X-Student-Key': studentKey,
          'X-Course-Id': COURSE_ID,
        },
      });

      const data = response.data;
      if (!data) return null;

      const doc = typeof data.progress === 'string' 
        ? JSON.parse(data.progress) 
        : data.progress;

      return {
        doc,
        updatedAt: data.updatedAt,
      };
    } catch (error) {
      if (error.response && error.response.status === 404) {
        return null;
      }
      console.error('[SpringBootProgressStore] Error obteniendo progreso:', error.message);
      throw error;
    }
  }

  /**
   * Persiste el progreso en Spring Boot y retorna { updatedAt }
   */
  async put(studentKey, doc) {
    try {
      const progressPayload = typeof doc === 'string' 
        ? doc 
        : JSON.stringify(doc);

      const response = await axios.put(
        `${SPRING_BOOT_URL}/api/v1/progress`,
        {
          progress: progressPayload,
          schemaVersion: 1,
        },
        {
          headers: {
            'X-Internal-Secret': INTERNAL_SECRET,
            'X-Student-Key': studentKey,
            'X-Course-Id': COURSE_ID,
            'Content-Type': 'application/json',
          },
        }
      );

      return {
        updatedAt: response.data.updatedAt || new Date().toISOString(),
      };
    } catch (error) {
      console.error('[SpringBootProgressStore] Error guardando progreso:', error.message);
      throw error;
    }
  }
}