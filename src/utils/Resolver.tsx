import React from 'react';
import { Resolver } from "react-hook-form";
import { FormValues } from '@/types/types';

export const ResolverForm: Resolver<FormValues> = async (values) => {
    let res = {}
    if(!values.title){
        res = {...res,
            title: {
                type: "required",
                message: "The title is required."
            },
        }
    }
    if(!values.description){
        res = {...res,
           description: {
                type: "required",
                message: "The description is required."
            },
        }
    }
    return {
      values: !values.title ? {} : values,
      errors: res,
    };
  };

export default ResolverForm