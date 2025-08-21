import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Instagram } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      nome: "",
      empresa: "",
      email: "",
      telefone: "",
      servico: "",
      mensagem: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Erro ao enviar mensagem",
        description: error.message || "Tente novamente mais tarde.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactMessage) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-cyan-300 mb-4">Fale Conosco</h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto font-sans">
            Vamos conversar sobre como podemos ajudar a transformar suas ideias em realidade
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-heading font-semibold text-cyan-400">Entre em Contato</h3>
            <p className="text-foreground leading-relaxed font-sans">
              Estamos prontos para discutir seu próximo projeto. Entre em contato conosco 
              através dos canais abaixo ou utilize o formulário ao lado para enviar sua mensagem.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Mail className="text-white" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-cyan-300">Email</h4>
                  <p className="text-muted-foreground font-sans">contato@alfaeomegadev.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                  <Phone className="text-white" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-cyan-300">Telefone</h4>
                  <p className="text-muted-foreground font-sans">+55 (11) 9999-9999</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                  <MapPin className="text-white" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-cyan-300">Localização</h4>
                  <p className="text-muted-foreground font-sans">São Paulo, SP - Brasil</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-6">
              <h4 className="font-heading font-semibold text-cyan-300 mb-4">Siga-nos</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-card rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors border border-cyan-500/30">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-card rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors border border-cyan-500/30">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-card rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors border border-cyan-500/30">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-card rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors border border-cyan-500/30">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card rounded-xl p-8 border border-cyan-500/30">
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="nome"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-heading text-cyan-300">Nome *</FormLabel>
                          <FormControl>
                            <Input placeholder="Seu nome completo" {...field} className="font-sans" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="empresa"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-heading text-cyan-300">Empresa</FormLabel>
                          <FormControl>
                            <Input placeholder="Nome da empresa" {...field} className="font-sans" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-heading text-cyan-300">Email *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="seu@email.com" {...field} className="font-sans" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="telefone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-heading text-cyan-300">Telefone</FormLabel>
                          <FormControl>
                            <Input placeholder="(11) 99999-9999" {...field} className="font-sans" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="servico"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-heading text-cyan-300">Tipo de Serviço</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="font-sans">
                              <SelectValue placeholder="Selecione um serviço" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="consultoria">Consultoria em Software</SelectItem>
                            <SelectItem value="desenvolvimento">Desenvolvimento de Sistema</SelectItem>
                            <SelectItem value="mobile">Aplicativo Mobile</SelectItem>
                            <SelectItem value="web">Aplicação Web</SelectItem>
                            <SelectItem value="outros">Outros</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="mensagem"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-heading text-cyan-300">Mensagem *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Conte-nos sobre seu projeto..." 
                            className="resize-none font-sans"
                            rows={5}
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full bg-primary text-white py-3 px-6 rounded-lg font-heading font-semibold hover:bg-blue-600 transition-colors duration-200"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? "Enviando..." : "Enviar Mensagem"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
