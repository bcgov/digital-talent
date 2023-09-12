import { guidToUuid } from './guid-to-uuid.util';

describe('guidToUuid', () => {
  it('should convert a valid GUID to UUID', () => {
    const guid = '0123456789ABCDEF0123456789ABCDEF';
    const expectedUuid = '01234567-89ab-cdef-0123-456789abcdef';
    expect(guidToUuid(guid)).toBe(expectedUuid);
  });

  it('should handle GUIDs shorter than expected', () => {
    const guid = '0123456789ABCDEF0123';
    const expectedUuid = '01234567-89ab-cdef-0123-';
    expect(guidToUuid(guid)).toBe(expectedUuid);
  });

  it('should handle empty GUID', () => {
    const guid = '';
    const expectedUuid = '----';
    expect(guidToUuid(guid)).toBe(expectedUuid);
  });

  it('should handle GUIDs with special characters', () => {
    const guid = '!@#$%^&*()_+{}|:?><';
    const expectedUuid = '!@#$%^&*-()_+-{}|:-?><-';
    expect(guidToUuid(guid)).toBe(expectedUuid);
  });

  it('should convert uppercase GUID characters to lowercase in UUID', () => {
    const guid = 'ABCDEF0123456789ABCDEF0123456789';
    const expectedUuid = 'abcdef01-2345-6789-abcd-ef0123456789';
    expect(guidToUuid(guid)).toBe(expectedUuid);
  });

  it('should correctly slice at boundary values', () => {
    const guid = '0123456789ABCDEF0123';
    const expectedUuid = '01234567-89ab-cdef-0123-';
    expect(guidToUuid(guid)).toBe(expectedUuid);
  });

  it('should handle GUIDs longer than expected', () => {
    const guid = '0123456789ABCDEF0123456789ABCDEFEXTRA';
    const expectedUuid = '01234567-89ab-cdef-0123-456789abcdefextra';
    expect(guidToUuid(guid)).toBe(expectedUuid);
  });
});
