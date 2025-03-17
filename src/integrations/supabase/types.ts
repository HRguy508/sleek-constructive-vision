export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      applications: {
        Row: {
          applicant_id: string
          cover_letter: string | null
          created_at: string
          id: string
          job_id: string
          resume_url: string
          review_notes: string | null
          reviewed_by: string | null
          status: Database["public"]["Enums"]["application_status"]
          updated_at: string
        }
        Insert: {
          applicant_id: string
          cover_letter?: string | null
          created_at?: string
          id?: string
          job_id: string
          resume_url: string
          review_notes?: string | null
          reviewed_by?: string | null
          status?: Database["public"]["Enums"]["application_status"]
          updated_at?: string
        }
        Update: {
          applicant_id?: string
          cover_letter?: string | null
          created_at?: string
          id?: string
          job_id?: string
          resume_url?: string
          review_notes?: string | null
          reviewed_by?: string | null
          status?: Database["public"]["Enums"]["application_status"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "applications_applicant_id_fkey"
            columns: ["applicant_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "applications_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "jobs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "applications_reviewed_by_fkey"
            columns: ["reviewed_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      contact_submissions: {
        Row: {
          created_at: string | null
          email: string
          id: string
          message: string
          name: string
          phone: string | null
          status: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: string
          message: string
          name: string
          phone?: string | null
          status?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: string
          message?: string
          name?: string
          phone?: string | null
          status?: string | null
        }
        Relationships: []
      }
      jobs: {
        Row: {
          category: Database["public"]["Enums"]["job_category"]
          created_at: string
          description: string
          id: string
          is_active: boolean
          location: string
          posted_by: string
          requirements: string[]
          salary_range: string | null
          title: string
          updated_at: string
        }
        Insert: {
          category: Database["public"]["Enums"]["job_category"]
          created_at?: string
          description: string
          id?: string
          is_active?: boolean
          location: string
          posted_by: string
          requirements: string[]
          salary_range?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          category?: Database["public"]["Enums"]["job_category"]
          created_at?: string
          description?: string
          id?: string
          is_active?: boolean
          location?: string
          posted_by?: string
          requirements?: string[]
          salary_range?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "jobs_posted_by_fkey"
            columns: ["posted_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          bio: string | null
          certifications: string[] | null
          education: string[] | null
          experience: string[] | null
          first_name: string | null
          id: string
          last_name: string | null
          phone: string | null
          profile_picture: string | null
          role: Database["public"]["Enums"]["user_role"]
          skills: string[] | null
          updated_at: string | null
        }
        Insert: {
          bio?: string | null
          certifications?: string[] | null
          education?: string[] | null
          experience?: string[] | null
          first_name?: string | null
          id: string
          last_name?: string | null
          phone?: string | null
          profile_picture?: string | null
          role?: Database["public"]["Enums"]["user_role"]
          skills?: string[] | null
          updated_at?: string | null
        }
        Update: {
          bio?: string | null
          certifications?: string[] | null
          education?: string[] | null
          experience?: string[] | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          phone?: string | null
          profile_picture?: string | null
          role?: Database["public"]["Enums"]["user_role"]
          skills?: string[] | null
          updated_at?: string | null
        }
        Relationships: []
      }
      project_members: {
        Row: {
          created_at: string
          engineer_id: string
          id: string
          project_id: string
          role: string
        }
        Insert: {
          created_at?: string
          engineer_id: string
          id?: string
          project_id: string
          role: string
        }
        Update: {
          created_at?: string
          engineer_id?: string
          id?: string
          project_id?: string
          role?: string
        }
        Relationships: [
          {
            foreignKeyName: "project_members_engineer_id_fkey"
            columns: ["engineer_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_members_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      project_resources: {
        Row: {
          created_at: string
          description: string | null
          file_type: string
          file_url: string
          id: string
          name: string
          project_id: string
          uploaded_by: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          file_type: string
          file_url: string
          id?: string
          name: string
          project_id: string
          uploaded_by: string
        }
        Update: {
          created_at?: string
          description?: string | null
          file_type?: string
          file_url?: string
          id?: string
          name?: string
          project_id?: string
          uploaded_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "project_resources_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_resources_uploaded_by_fkey"
            columns: ["uploaded_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      projects: {
        Row: {
          category: Database["public"]["Enums"]["job_category"]
          created_at: string
          created_by: string
          description: string
          end_date: string | null
          id: string
          images: string[] | null
          is_published: boolean
          location: string
          start_date: string
          status: string
          title: string
          updated_at: string
        }
        Insert: {
          category: Database["public"]["Enums"]["job_category"]
          created_at?: string
          created_by: string
          description: string
          end_date?: string | null
          id?: string
          images?: string[] | null
          is_published?: boolean
          location: string
          start_date: string
          status: string
          title: string
          updated_at?: string
        }
        Update: {
          category?: Database["public"]["Enums"]["job_category"]
          created_at?: string
          created_by?: string
          description?: string
          end_date?: string | null
          id?: string
          images?: string[] | null
          is_published?: boolean
          location?: string
          start_date?: string
          status?: string
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "projects_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      application_status: "Pending" | "Approved" | "Rejected"
      job_category:
        | "Civil"
        | "Structural"
        | "Electrical"
        | "Mechanical"
        | "Environmental"
        | "Architectural"
        | "Geotechnical"
        | "Transportation"
        | "Project Management"
        | "Other"
      user_role: "Admin" | "Engineer"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
