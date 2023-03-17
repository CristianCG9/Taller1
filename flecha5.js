let calcularSalarioNeto = (salarioBase, comisionLicencia, licenciasVendidas, impuestos) => (salarioBase + (licenciasVendidas*comisionLicencia))*(1-impuestos)

console.log(`El salario neto mensual del trabajador es de: $${calcularSalarioNeto(3500000,1500000,3,0.05)} de pesos`)
