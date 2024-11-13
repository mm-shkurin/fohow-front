import React, { useEffect, useState } from 'react';
import './Card.css'
import { useHistory, useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';

const CardDetails = () => {
  const history = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(`https://fohowomsk.space/api/products/${id}/`);
        const data = await response.json();
        console.log('Product data:', data);
        setProduct(data); // Сохраняем данные товара в состоянии
      } catch (error) {
        console.error('Error fetching product data:', error);
        // Обработка ошибок
      }
    };

    fetchProductData();
  }, [id]);

  return (
    <div>
      {product && (
        <div className='content'>
          <div className="card-inf">
            <div className='card_h11'>{<span>{product.name}</span>}</div>
            <div className='image_card'>
              {product.images.map((image) => (
                <img className="card-images" src={`http://fohowomsk.space${image.img}`} alt={image.name} />
              ))}
            </div>
            <div className='txt-card'>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardDetails;