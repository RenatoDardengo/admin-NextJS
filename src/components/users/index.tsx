import React from 'react';
import style from './style.module.css';
import { Trash2,FilePenLine } from 'lucide-react';
interface user {
    id:number;
    name: string;
    level: number;
    phoneNumber:number;
    jobTitle:string

  }

export default function Users() {
    var userss:user[] = new Array(
        {id:1, name: "João", level: 20, phoneNumber:22222, jobTitle:"adm" },
        {id:1, name: "João", level: 20, phoneNumber:22222, jobTitle:"adm" },
        {id:1, name: "João", level: 20, phoneNumber:22222, jobTitle:"adm" },

      );
  return (
    <section className={style.container}>
        <span> Cadastro de usuários</span>
        <span>
            <div className={style.section_options}> Botões de pesquisa</div>
            <div className={style.section_table}>
            <div className={style.table_container}>
                <table className={style.table}>
                    <thead className={style.thead}>
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th className={style.th_hide}>Permissão</th>
                            <th>Telefone</th>
                            <th className={style.th_hide}>Função</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>{userss!=null ? (
                        userss.map((user, idx) =>
                            <tr key={idx}>
                                <td>
                                    {user.id}
                                </td>
                                <td>
                                    {user.name}
                                </td>
                                <td className={style.th_hide}>
                                    {user.level}
                                </td>
                                <td >
                                    {user.phoneNumber}
                                </td>
                                <td className={style.th_hide}>
                                    {user.jobTitle}
                                </td>
                                <td className={`${style.table_img} ${style.last_column}`} >
                                    <FilePenLine/>
                                    <Trash2/>
                                </td>
                            </tr>)) : (<tr>
                                <td colSpan={6}>Nenhum usuário encontrado!</td>
                            </tr>)}


                    </tbody>
                </table>
            </div>
            </div>
        </span>

    </section>
    
  )
}
