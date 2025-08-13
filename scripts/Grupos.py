import pandas as pd
import numpy as np
import openpyxl

# Ruta del archivo original
archivo = 'EBDV.xlsx'

# Leer archivo Excel
df = pd.read_excel(archivo, sheet_name=0)

# Filtrar por grupo
joyitas = df[df['Grupo'] == 'Joyitas']
corderitos = df[df['Grupo'] == 'Corderitos']
amigos = df[df['Grupo'] == 'Amigos 1']
discipulos = df[df['Grupo'] == 'Discípulos 1']
mensajeros = df[df['Grupo'] == 'Mensajeros']
generacion = df[df['Grupo'] == 'Generación de vida']
ciudadanos = df[df['Grupo'] == 'Ciudadanos']

# Función para dividir equitativamente entre niños y niñas
def dividir_en_dos(df_grupo):
    niños = df_grupo[df_grupo['Sexo'].str.lower() == 'hombre']
    niñas = df_grupo[df_grupo['Sexo'].str.lower() == 'mujer']
    mitad_niños = np.array_split(niños, 2)
    mitad_niñas = np.array_split(niñas, 2)
    grupo1 = pd.concat([mitad_niños[0], mitad_niñas[0]]).sample(frac=1).reset_index(drop=True)
    grupo2 = pd.concat([mitad_niños[1], mitad_niñas[1]]).sample(frac=1).reset_index(drop=True)
    return grupo1, grupo2

# Dividir Amigos y Discípulos en dos grupos
amigos1, amigos2 = dividir_en_dos(amigos)
discipulos1, discipulos2 = dividir_en_dos(discipulos)

# Guardar en el mismo archivo, sobrescribiendo las hojas relacionadas
with pd.ExcelWriter(archivo, engine='openpyxl', mode='a', if_sheet_exists='replace') as writer:
    joyitas.to_excel(writer, sheet_name='Joyitas', index=False)
    corderitos.to_excel(writer, sheet_name='Corderitos', index=False)
    amigos1.to_excel(writer, sheet_name='Amigos 1', index=False)
    amigos2.to_excel(writer, sheet_name='Amigos 2', index=False)
    discipulos1.to_excel(writer, sheet_name='Discipulos 1', index=False)
    discipulos2.to_excel(writer, sheet_name='Discipulos 2', index=False)
    mensajeros.to_excel(writer, sheet_name='Mensajeros', index=False)
    generacion.to_excel(writer, sheet_name='Generacion de Vida', index=False)
    ciudadanos.to_excel(writer, sheet_name='Ciudadanos', index=False)

print("Grupos actualizados y guardados en el archivo EBDV.xlsx")