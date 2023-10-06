import Image from 'next/image';
import React from "react";

export interface IUsuario {
    firstName: string;
    lastName: string;
    picture: string;
    role: 'Admin' | 'Client';
  }


const UserCard = (user:IUsuario) =>{
    return(
        <div className='flex flex-row gap-4 border border-gray-300 rounded-lg overflow-hidden w-96'>
            <div className='aspect-square w-32'>
                <Image width={128} height={128} className=' object-cover w-full h-full' src={user.picture} alt={`User photo of ${user.firstName} ${user.lastName}`} />
            </div>
            <div className='flex flex-col justify-center'>
                <span><span className='font-bold'>Nombre:</span> {user.firstName}</span>
                <span><span className='font-bold'>Apellido:</span> {user.lastName}</span>
                <span><span className='font-bold'>Rol:</span> {user.role}</span>
            </div>
        </div>
    )
}

export default UserCard;