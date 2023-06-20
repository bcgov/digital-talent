import { diff } from './diff.util';

describe('diff', () => {
  describe('equal object', () => {
    const left: Record<string, any> = {
      name: 'Bob',
    };

    const right: Record<string, any> = {
      name: 'Bob',
    };

    it('should not return any changes', () => {
      const delta = diff(left, right);
      expect(delta).toEqual({});
    });
  });

  describe('updated object', () => {
    const existing: Record<string, any> = {
      name: 'Bob',
      age: 40,
      salary: [0, 1],
      roles: [
        {
          id: 0,
          name: 'admin',
        },
        {
          id: 1,
          name: 'user',
        },
      ],
    };

    describe('only the updated name is provided', () => {
      it('should return an object with just the name updated', () => {
        const delta = diff(existing, {
          name: 'John',
        });

        expect(delta).toEqual({ name: 'John' });
      });
    });

    describe('the updated name and other properties are provided', () => {
      it('should return an object with just the name updated', () => {
        const delta = diff(existing, {
          name: 'John',
          age: 40,
          salary: [0, 1],
          roles: [
            {
              id: 0,
              name: 'admin',
            },
            {
              id: 1,
              name: 'user',
            },
          ],
        });

        expect(delta).toEqual({ name: 'John' });
      });
    });

    describe('a number array is emptied', () => {
      it('should return an object with an empty array', () => {
        const delta = diff(existing, {
          salary: [],
        });

        expect(delta).toEqual({ salary: [] });
      });
    });

    describe('a number array is updated', () => {
      it('should return an object with the updated values which were provided', () => {
        const delta = diff(existing, {
          salary: [10, 100],
        });

        expect(delta).toEqual({ salary: [10, 100] });
      });
    });

    describe('an object array is updated', () => {
      it('should return an object with the updated values which were provided', () => {
        const delta = diff(existing, {
          roles: [
            {
              id: 2,
              name: 'admin-2',
            },
            {
              id: 3,
              name: 'user-3',
            },
          ],
        });

        expect(delta).toEqual({
          roles: [
            {
              id: 2,
              name: 'admin-2',
            },
            {
              id: 3,
              name: 'user-3',
            },
          ],
        });
      });
    });
  });
});
