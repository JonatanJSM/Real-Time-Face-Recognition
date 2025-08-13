import pandas as pd
import xlsxwriter

columnas_ninos = [
    "ID", "Nombre", "Edad", "Fecha de nacimiento", "Grupo (automático)", "Sexo",
    "Pagó inscripción", "ID Padres/Tutores", "Teléfono principal",
    "Alergias / Condición médica", "Autorizado para salir solo",
    "Asiste a la iglesia", "Quién lo invitó", "Fecha de registro"
]

columnas_papas = [
    "ID", "Nombre del padre/madre o tutor", "Teléfono", "Otro teléfono",
    "Relación con el niño", "Correo electrónico", "Dirección", "Observaciones"
]

ruta = "EBDV_Registro_2025_con_encabezado_color.xlsx"
workbook = xlsxwriter.Workbook(ruta)

# Formato encabezado
formato_encabezado = workbook.add_format({
    'bold': True, 'bg_color': '#DDEBF7',
    'border': 1, 'align': 'center', 'valign': 'vcenter'
})

# ---- Hoja Niños ----
hoja1 = workbook.add_worksheet("Niños")

# Escribir encabezados
for col, title in enumerate(columnas_ninos):
    hoja1.write(0, col, title, formato_encabezado)

# Ajustar ancho de columnas
anchos_hoja1 = [6, 22, 6, 18, 26, 6, 14, 16, 16, 26, 22, 18, 22, 18]
for col, ancho in enumerate(anchos_hoja1):
    hoja1.set_column(col, col, ancho)

# ---- Hoja Padres ----
hoja2 = workbook.add_worksheet("Padres")
for col, title in enumerate(columnas_papas):
    hoja2.write(0, col, title, formato_encabezado)

anchos_hoja2 = [6, 30, 16, 16, 22, 26, 30, 28]
for col, ancho in enumerate(anchos_hoja2):
    hoja2.set_column(col, col, ancho)

workbook.close()
