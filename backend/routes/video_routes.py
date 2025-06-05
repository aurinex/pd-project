from flask import Blueprint, request, jsonify
import base64
from ..video_analytics import video_analytics

video_routes = Blueprint('video', __name__)

@video_routes.route('/analyze', methods=['POST'])
def analyze_video_frame():
    """
    Анализ отдельного кадра видео с обнаружением объектов.
    
    Request:
        - frame: base64-encoded изображение
        - options: опции детекции (необязательно)
    
    Response:
        - detections: список обнаруженных объектов
        - analytics: статистика и предупреждения
    """
    if not request.is_json:
        return jsonify({"error": "Требуется JSON"}), 400
    
    data = request.json
    
    if 'frame' not in data:
        return jsonify({"error": "Отсутствуют данные кадра"}), 400
    
    try:
        # Декодируем base64 в бинарные данные
        frame_data = base64.b64decode(data['frame'])
        
        # Получаем опции детекции
        options = data.get('options', {})
        detect_faces = options.get('faces', True)
        detect_cars = options.get('cars', True)
        detect_people = options.get('people', True)
        detect_objects = options.get('objects', True)
        
        # Анализируем кадр
        if options:
            detections = video_analytics.detect_objects(
                frame_data,
                detect_faces=detect_faces,
                detect_cars=detect_cars,
                detect_people=detect_people,
                detect_objects=detect_objects
            )
            result = {
                "detections": detections,
                "timestamp": detections[0]["timestamp"] if detections else None
            }
        else:
            # Полный анализ кадра с аналитикой
            result = video_analytics.analyze_frame(frame_data)
        
        return jsonify(result)
    
    except Exception as e:
        return jsonify({"error": f"Ошибка обработки кадра: {str(e)}"}), 500

@video_routes.route('/detections/current', methods=['GET'])
def get_current_detections():
    """
    Получение текущих детекций объектов.
    
    Response:
        - detections: список текущих детекций
    """
    try:
        detections = video_analytics.get_current_detections()
        return jsonify({"detections": detections})
    except Exception as e:
        return jsonify({"error": f"Ошибка получения детекций: {str(e)}"}), 500

@video_routes.route('/detections/history', methods=['GET'])
def get_detection_history():
    """
    Получение истории детекций объектов.
    
    Response:
        - history: список детекций из истории
    """
    try:
        history = video_analytics.get_detection_history()
        return jsonify({"history": history})
    except Exception as e:
        return jsonify({"error": f"Ошибка получения истории: {str(e)}"}), 500

@video_routes.route('/detections/save/<int:detection_id>', methods=['POST'])
def save_detection(detection_id):
    """
    Сохранение конкретной детекции.
    
    URL Parameters:
        - detection_id: ID детекции для сохранения
    
    Response:
        - result: информация о сохраненной детекции
    """
    try:
        result = video_analytics.save_detection(detection_id)
        
        if "error" in result:
            return jsonify(result), 404
            
        return jsonify({"result": result})
    except Exception as e:
        return jsonify({"error": f"Ошибка сохранения детекции: {str(e)}"}), 500

@video_routes.route('/stream/connect', methods=['POST'])
def connect_to_stream():
    """
    Подключение к видеопотоку (заглушка).
    В реальном приложении здесь будет логика подключения к RTSP/камере.
    
    Request:
        - stream_url: URL видеопотока
        - stream_type: тип потока (rtsp, http, etc.)
    
    Response:
        - stream_id: ID подключенного потока
    """
    if not request.is_json:
        return jsonify({"error": "Требуется JSON"}), 400
    
    data = request.json
    
    if 'stream_url' not in data:
        return jsonify({"error": "Требуется URL потока"}), 400
    
    # Заглушка - в реальном приложении здесь будет подключение к потоку
    stream_id = f"stream_{hash(data['stream_url']) % 10000}"
    
    return jsonify({
        "stream_id": stream_id,
        "status": "connected",
        "message": "Успешное подключение к потоку (демо)"
    }) 