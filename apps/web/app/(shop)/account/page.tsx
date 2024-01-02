"use client";

import React from "react";

import { Layout } from "@layout";

import { PrimaryButton } from "@components/Buttons/PrimaryButton";

import {
  Container,
  Content,
  ForgotPassword,
  Input,
  Inputs,
  Label,
  LoginSection,
  RegisterSection,
  RequiredFields,
  SectionContent,
  Separator,
  Title,
} from "./styles";

export default function Account() {
  return (
    <Layout>
      <Container>
        <Content>
          <LoginSection>
            <SectionContent>
              <Title>Acessar conta</Title>
              <Inputs>
                <Label>
                  Email
                  <Input type="text" />
                </Label>
                <Label>
                  Senha
                  <Input type="password" />
                </Label>
                <ForgotPassword>Esqueci minha senha</ForgotPassword>
              </Inputs>
              <PrimaryButton>Entrar</PrimaryButton>
              <Separator>ou</Separator>
            </SectionContent>
          </LoginSection>
          <RegisterSection>
            <SectionContent>
              <Title>Criar uma conta</Title>
              <Inputs>
                <Label>
                  Nome
                  <Input type="text" />
                </Label>
                <Label>
                  Email *
                  <Input type="text" />
                </Label>
                <Label>
                  Senha *
                  <Input type="password" />
                </Label>
                <Label>
                  Confirmar senha *
                  <Input type="password" />
                </Label>
                <RequiredFields>* Campos obrigatórios</RequiredFields>
              </Inputs>
              <PrimaryButton>Registrar</PrimaryButton>
            </SectionContent>
          </RegisterSection>
        </Content>
      </Container>
    </Layout>
  );
}