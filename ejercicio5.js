function calcularSalarioNeto(salarioBase,comisionLicencia,licenciasVendidas,impuestos) {
    let salarioBruto=salarioBase+(licenciasVendidas*comisionLicencia)
    let salarioNeto=salarioBruto*(1-impuestos)
    return salarioNeto
}

console.log(`El salario neto mensual del trabajador es de: $${calcularSalarioNeto(3500000,1500000,3,0.05)} pesos`)