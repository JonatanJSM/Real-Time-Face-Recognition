# Real-Time-Face-Recognition

## Create env
python -m venv myenv
python3 -m venv myenv

## Activate env
myenv\Scripts\activate
source myenv/bin/activate

## Deactivate env
deactivate


## Install libs
sudo apt update
sudo apt install -y build-essential cmake libopenblas-dev liblapack-dev libx11-dev libgtk-3-dev python3-dev

sudo apt update
sudo apt install -y cmake build-essential python3-dev

pip install flask face_recognition opencv-python numpy


## Data base

docker run --name face-db -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=admin123 -e POSTGRES_DB=faces_db -p 5432:5432 -d postgres
