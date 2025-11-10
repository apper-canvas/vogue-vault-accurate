/**
 * Singleton class to manage ApperClient instance
 * Prevents multiple SDK initializations
 */
class ApperClientSingleton {
  constructor() {
    this._client = null;
    this._isInitializing = false;
  }

async getInstance() {
    // Return cached instance if exists
    if (this._client) {
      return this._client;
    }

    // Prevent simultaneous initialization
    if (this._isInitializing) {
      // Wait for current initialization to complete
      return await this.waitForInitialization();
    }

    try {
      this._isInitializing = true;
      
      // Wait for SDK to be available with timeout
      await this.waitForSDK();
      
      if (!window.ApperSDK) {
        console.error('ApperSDK still not available after waiting');
        return null;
      }
      
      const { ApperClient } = window.ApperSDK;
      const projectId = import.meta.env.VITE_APPER_PROJECT_ID;
      const publicKey = import.meta.env.VITE_APPER_PUBLIC_KEY;

      if (!projectId) {
        console.error('VITE_APPER_PROJECT_ID is required');
        return null;
      }

      this._client = new ApperClient({
        apperProjectId: projectId,
        apperPublicKey: publicKey,
      });

      return this._client;
    } catch (error) {
      console.error('Failed to initialize ApperClient:', error);
      return null;
    } finally {
      this._isInitializing = false;
    }
  }

  async waitForSDK(maxWaitTime = 10000) {
    const startTime = Date.now();
    
    while (!window.ApperSDK && (Date.now() - startTime) < maxWaitTime) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }

  async waitForInitialization(maxWaitTime = 5000) {
    const startTime = Date.now();
    
    while (this._isInitializing && (Date.now() - startTime) < maxWaitTime) {
      await new Promise(resolve => setTimeout(resolve, 50));
    }
    
    return this._client;
  }

  reset() {
    if (this._client) {
      this._client = null;
    }
  }
}

// Create singleton instance
let _singletonInstance = null;

const getSingleton = () => {
  if (!_singletonInstance) {
    _singletonInstance = new ApperClientSingleton();
  }
  return _singletonInstance;
};
// Main export - now async
export const getApperClient = async () => await getSingleton().getInstance();

// Alternative exports
export const apperClientSingleton = {
  getInstance: async () => await getSingleton().getInstance(),
  reset: () => getSingleton().reset(),
};

export default getSingleton;