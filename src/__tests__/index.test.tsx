// Import the class to be tested
import { ReactNativeMidiKitAccess } from '../';

// Mock 'NativeModules'
jest.mock('react-native', () => ({
  Platform: {
    select: jest.fn().mockReturnValue(null), // Mock the 'select' method to return null
  },
  NativeModules: {
    Midikit: {
      start: jest.fn().mockResolvedValue(null), // Mock the async method to return a null promise
    },
  },
}));

// Describe the test suite
describe('ReactNativeMIDIKit', () => {
  // Test case: Check if the return value of getEndpoints is null
  it('should return null from getEndpoints', async () => {
    // Create an instance of ReactNativeMIDIKit
    const midiKitInstance = new ReactNativeMidiKitAccess();

    // Call the async method and await the result
    const result = await midiKitInstance.connect();

    // Assert that the return value is null
    expect(result).toBeNull();
  });
});
