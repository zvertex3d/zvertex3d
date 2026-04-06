export function calculatePrice(size, material) {
  const sizeMap = { small: 200, medium: 500, large: 1000 };
  const materialMap = {
    PLA: 1,
    ABS: 1.2,
    Resin: 1.5,
    Metal: 2.5
  };

  return Math.round((sizeMap[size] || 0) * (materialMap[material] || 1));
}